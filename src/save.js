/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes }) {

  const action = 'https://rudrastyh.us14.list-manage.com/subscribe/post?u=1828b9fa70c6e326a1aba64f2&amp;id=' + attributes.list_id + '&amp;f_id=003944e0f0'

  return (
    <div { ...useBlockProps.save() }>
      <div className="misha-subscription-block-wrapper">
      <div className="misha-subscription-block-image" style={ { backgroundImage : 'url( ' + attributes.image.url + ' )' } }></div>
        <div className="misha-subscription-block-content">
          <RichText.Content tagName="h3" value={ attributes.titletext } />
          <RichText.Content tagName="p" value={ attributes.justtext } />
          <form action={ action } method="POST">
            <input type="email" name="EMAIL" placeholder="Your email" />
            <RichText.Content tagName="button" value={ attributes.btntext } />
            <input type="hidden" name="opt_in" value={ attributes.doubleoptin ? 'yes' : 'no' } />
          </form>
        </div>
      </div>
    </div>
	);
}
