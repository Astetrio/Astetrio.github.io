import { useQMarkdownGlobalProps } from '@quasar/quasar-ui-qmarkdown/src/index'
import { boot } from 'quasar/wrappers';
//import QMarkdown from '@quasar/quasar-ui-qmarkdown'
import imagePWidth from '../utils/markdown-it-image-percentage-width';
import align from '../utils/markdown-it-align';

export default boot(({ app }) => {
	//const useQMarkdownGlobalProps = (QMarkdown as any).useQMarkdownGlobalProps;

	useQMarkdownGlobalProps({
  	plugins: [ imagePWidth, align ]
	});
});
