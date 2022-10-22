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

  md.renderer.rules.align = (tokens, idx, options, env, self) => {
		const token = tokens[idx];
		const aIndex = token.attrIndex('align');

		if (token.attrs) {
			const align = token.attrs[aIndex][1];
		
			return `<div style='text-align: ${align}; margin-left: auto; ${align === "center" ? "margin-right: auto;" : ""}'>${self.render(token.children, options, env)}</div>`;
		}

		return token.content;
  };

  return function(state: StateInline, silent: boolean) {
		const ch1 = state.src.charCodeAt(state.pos);
		const ch2 = state.src.charCodeAt(state.pos + 1);
    if (!((ch1 === 0x7C && ch2 === 0x7C) ||
    		(ch1 === 0x5C && ch2 === 0x5C))) {
    	return false;
    }

		const src = state.src.substring(state.pos);
		const eol = src.indexOf('\n');

		const content = src.substring(2, eol);

		const tokens = [];
		state.md.inline.parse(
		      content.trim(),
		      state.md,
		      state.env,
		      tokens
		);

		const token = state.push('align', 'div', 0);
		token.attrs = [ [ 'align', 'center' ] ];
		token.children = tokens;
		token.content = content;

		//console.log(tokens);
  
    state.pos += eol + 1;
    state.posMax += eol + 1;
    return true;
  };
}

export default function(md: MarkdownIt, options: Options) {
	md.inline.ruler.before('text', 'align', plugin(md, options));
};
