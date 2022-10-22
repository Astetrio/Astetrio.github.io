/* eslint-disable */
// @ts-nocheck
import MarkdownIt, { Options } from 'markdown-it';
import StateInline from 'markdown-it/lib/rules_inline/state_inline';
import { normalizeReference, isSpace } from 'markdown-it/lib/common/utils';

function plugin(md: MarkdownIt, options: Options) {
  /*const defaultRender = md.renderer.rules.image;
  const regex = /.*=(\d+%)/;

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const aIndex = token.attrIndex('src');

    if (token.attrs && regex.test(token.attrs[aIndex][1])) {
    	const result = token.attrs[aIndex][1].match(vimeoRE);
      const src = result?.[1];
      const width = result?.[2];

      return (
        '<div class="embed-responsive embed-responsive-16by9">\n' +
        '  <iframe class="embed-responsive-item" src="//player.vimeo.com/video/' +
        id +
        '"></iframe>\n' +
        '</div>\n'
      );
    }

    // pass token to default renderer.
    return defaultRender?.(tokens, idx, options, env, self) ?? '';
  };*/

  return function(state: StateInline, silent: boolean) {
    var attrs,
        code,
        content,
        label,
        labelEnd,
        labelStart,
        pos,
        ref,
        res,
        title,
        token,
        tokens,
        start,
        href = '',
        oldPos = state.pos,
        max = state.posMax;

    if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
    const temp = state.src.substring(state.pos + 1, state.pos + 5);
    const padding = parseInt(temp);
    const nums = padding.toString().length;
    if (padding !== NaN && temp.charCodeAt(nums) !== 0x5B/* [ */) { return false; }
		// console.log(padding);

    labelStart = state.pos + 2 + nums;
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1 + nums, false);
  
    // parser failed to find ']', so it's not a valid link
    if (labelEnd < 0) { return false; }
  
    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
      //
      // Inline link
      //
  
      // [link](  <href>  "title"  )
      //        ^^ skipping these spaces
      pos++;
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }
      if (pos >= max) { return false; }
  
      // [link](  <href>  "title"  )
      //          ^^^^^^ parsing link destination
      start = pos;
      res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
      if (res.ok) {
        href = state.md.normalizeLink(res.str);
        if (state.md.validateLink(href)) {
          pos = res.pos;
        } else {
          href = '';
        }
      }
  
      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
      start = pos;
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }
  
      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
  
        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 0x0A) { break; }
        }
      } else {
        title = '';
      }
  
      if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
        state.pos = oldPos;
        return false;
      }
      pos++;
    } else {
      //
      // Link reference
      //
      if (typeof state.env.references === 'undefined') { return false; }
  
      if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
        start = pos + 1;
        pos = state.md.helpers.parseLinkLabel(state, pos);
        if (pos >= 0) {
          label = state.src.slice(start, pos++);
        } else {
          pos = labelEnd + 1;
        }
      } else {
        pos = labelEnd + 1;
      }
  
      // covers label === '' and label === undefined
      // (collapsed reference link and shortcut reference link respectively)
      if (!label) { label = state.src.slice(labelStart, labelEnd); }
  
      ref = state.env.references[normalizeReference(label)];
      if (!ref) {
        state.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }
  
    //
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
      content = state.src.slice(labelStart, labelEnd);
  
      state.md.inline.parse(
        content,
        state.md,
        state.env,
        tokens = []
      );
  
      token          = state.push('image', 'img', 0);
      token.attrs    = attrs = [ [ 'src', href ], [ 'alt', '' ], [ 'style', `width: ${padding}%;margin-left: ${(100 - padding) / 2}%;` ] ];
      token.children = tokens;
      token.content  = content;
  
      if (title) {
        attrs.push([ 'title', title ]);
      }
    }
  
    state.pos = pos;
    state.posMax = max;
    return true;
  };
}

export default function(md: MarkdownIt, options: Options) {
	md.inline.ruler.before('image', 'pimage', plugin(md, options));
};
