/**
 * BLOCK: vflipcard
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { InnerBlocks, URLInput, MediaUpload, MediaUploadCheck, PlainText } = wp.editor;
const { InspectorControls, ColorPalette } = wp.editor;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { BaseControl, ToggleControl, RangeControl, SelectControl, Button, Panel, PanelBody, PanelRow } = wp.components;
const { withInstanceId } = wp.compose;

//const ALLOWED_BLOCKS = [ 'core/image', 'core/heading', 'core/paragraph' ];

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cmls/block-vflipcard', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'CardFlip', // Block title.
	icon: 'format-gallery', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		'image',
		'hover',
		'flip',
		'imageflip',
		'vflipcard',
		'flip card',
		'card',
	],
	attributes: {
		url: {
		},
		newWindow: {
			type: 'boolean',
			default: false,
		},
		frontImage: {
			type: 'string',
			default: null,
		},
		frontImageSizing: {
			type: 'string',
			default: 'cover',
		},
		frontImageSizePercent: {
			type: 'integer',
			default: '100',
		},
		frontColor: {
			type: 'string',
			default: 'transparent',
		},
		backContentPadding: {
			type: 'integer',
			default: 5,
		},
		backImage: {
			type: 'string',
			default: null,
		},
		backImageSizing: {
			type: 'string',
			default: 'cover',
		},
		backImageSizePercent: {
			type: 'integer',
			default: '100',
		},
		backColor: {
			type: 'string',
			default: 'transparent',
		},
		frontContent: {
			type: 'array',
			source: 'children',
			selector: '.vflipcard-front',
		},
		backContent: {
			type: 'array',
			source: 'children',
			selector: 'h2',
		},
		showSide: {
			type: 'string',
			default: 'front',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit( props ) {
		//console.log(props, this);
		let { attributes, isSelected, className, setAttributes } = props;
		const getImageButton = ( openEvent, side, attrib, label ) => {
			let ret;
			if ( attributes[ attrib ] ) {
				ret = (
					<div class="vflipcard-image">
						<img
							src={ attributes[ attrib ] }
							className="vflipcard-${side}-bg-image"
							alt="vFlipCard Background"
						/>
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Change { label }
						</Button>
					</div>
				);
			} else {
				ret = (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Choose { label }
						</Button>
					</div>
				);
			}
			return ret;
		};

		return (
			<div className={ `${ className } vflipcard-show-${ attributes.showSide }` }>
				<Button
					className="vflipcard-flipper"
					onClick={
						() => {
							setAttributes( {
								showSide: attributes.showSide === 'front' ? 'back' : 'front',
							} );
						}
					}
				>
					{ attributes.showSide === 'front' ? 'Front' : 'Back' } (Flip it!)
				</Button>
				<a 
					href={ attributes.url }
					target={ attributes.newWindow && '_blank' }
					rel={ attributes.newWindow && 'noopener noreferrer' }
					className="vflipcard-container"
					onClick={(e) => { e.preventDefault(); }}
				>
					<div
						className="vflipcard-face vflipcard-front"
						style={ {
							backgroundImage: attributes.frontImage ? `url(${ attributes.frontImage })` : 'none',
							backgroundColor: attributes.frontColor,
							backgroundSize:
								attributes.frontImageSizing == 'percent' ?
									attributes.frontImageSizePercent + '%' :
									attributes.frontImageSizing,
						} }
					>
					</div>
					<div
						className="vflipcard-face vflipcard-back"
						style={ {
							backgroundImage: attributes.backImage ? `url(${ attributes.backImage })` : 'none',
							backgroundColor: attributes.backColor,
						} }
					>
						<div class="vflipcard-back-body" style={ {
							padding: attributes.backContentPadding + `%`
						} }>
							<div>
								<InnerBlocks

								/>
							</div>
						</div>
					</div>
				</a>
				<InspectorControls>
					<PanelBody title="Link" initialOpen={ false }>
						<PanelRow>
							<URLInput
								value={ attributes.url }
								autoFocus={ false }
								onChange={ (value) => setAttributes( { url: value } ) }
								disableSuggestions={ ! isSelected }
								isFullWidth
								hasBorder
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ 'Open link in new window' }
								checked={ !! attributes.newWindow }
								onChange={ () => setAttributes( {  newWindow: ! attributes.newWindow } ) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Front" >
						<PanelRow>
							<ColorPalette
								id="vflipcard-front-bgcolor"
								value={ attributes.frontColor }
								onChange={
									val => {
										setAttributes( { frontColor: val } );
									}
								}
								label="Background color"
							/>
						</PanelRow>
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									id="vflipcard-front-bgimage"
									label="Front Background Image"
									onSelect={
										media => {
											setAttributes( { frontImage: media.sizes.full.url } );
										}
									}
									type="image"
									value={ attributes.frontImage }
									render={ ( { open } ) => getImageButton( open, 'front', 'frontImage', 'Background Image' ) }
								/>
							</MediaUploadCheck>
						</PanelRow>
						{
							attributes.frontImage &&
							<p>
								<a href="#"
									onClick={ () => setAttributes({ frontImage: null }) }
								>
									Remove Image
								</a>
							</p>
						}
						{
							attributes.frontImage &&
								<SelectControl
								        label="Sizing Method"
								        value={ attributes.frontImageSizing }
								        options={ [
								            { label: 'Cover', value: 'cover' },
								            { label: 'Contain', value: 'contain' },
								            { label: 'Percent', value: 'percent' },
								        ] }
								        onChange={ ( size ) => { setAttributes( { frontImageSizing: size } ) } }
								    />
						}
						{
							attributes.frontImageSizing == 'percent' &&
							<PanelRow>
								<RangeControl
							        value={ attributes.frontImageSizePercent }
							        onChange={ ( value ) => setAttributes( { frontImageSizePercent: value } ) }
							        min={ 0 }
							        max={ 200 }
							    />
							</PanelRow>
						}
					</PanelBody>
					<PanelBody title="Back" >
						<div>Content Padding %</div>
						<RangeControl
					        value={ attributes.backContentPadding }
					        onChange={ ( value ) => setAttributes( { backContentPadding: value } ) }
					        min={ 0 }
					        max={ 20 }
					        isFullWidth
					    />
						<PanelRow>
							<ColorPalette
								id="vflipcard-back-bgcolor"
								value={ attributes.backColor }
								onChange={
									val => {
										setAttributes( { backColor: val } );
									}
								}
								label="Background color"
							/>
						</PanelRow>
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									id="vflipcard-front-bgimage"
									label="Front Background Image"
									onSelect={
										media => {
											setAttributes( { backImage: media.url } );
										}
									}
									type="image"
									value={ attributes.backImage }
									render={ ( { open } ) => getImageButton( open, 'back', 'backImage', 'Background Image' ) }
								/>
							</MediaUploadCheck>
						</PanelRow>
						{
							attributes.backImage &&
							<p>
								<a href="#"
									onClick={ () => setAttributes({ backImage: null }) }
								>
									Remove Image
								</a>
							</p>
						}
						{
							attributes.backImage &&
								<SelectControl
								        label="Sizing Method"
								        value={ attributes.backImageSizing }
								        options={ [
								            { label: 'Cover', value: 'cover' },
								            { label: 'Contain', value: 'contain' },
								            { label: 'Percent', value: 'percent' },
								        ] }
								        onChange={ ( size ) => { setAttributes( { backImageSizing: size } ) } }
								    />
						}
						{
							attributes.backImageSizing == 'percent' &&
							<PanelRow>
								<RangeControl
							        value={ attributes.backImageSizePercent }
							        onChange={ ( value ) => setAttributes( { backImageSizePercent: value } ) }
							        min={ 0 }
							        max={ 200 }
							    />
							</PanelRow>
						}
					</PanelBody>
				</InspectorControls>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save( { attributes, className } ) {
		return (
			<div className={ className }>
				<label>
					<input type="checkbox" className="vflipcard-toggle" />
					<a
						href={ attributes.url }
						target={ attributes.newWindow && '_blank' }
						rel={ attributes.newWindow && 'noopener noreferrer' }
						className="vflipcard-container"
					>
						<div
							className="vflipcard-face vflipcard-front"
							style={ {
								backgroundImage: attributes.frontImage ? `url(${ attributes.frontImage })` : 'none',
								backgroundColor: attributes.frontColor,
								backgroundSize:
									attributes.frontImageSizing == 'percent' ?
										attributes.frontImageSizePercent + '%' :
										attributes.frontImageSizing,
							} }
						>
							<div className="vflipcard-front-body">
							</div>
						</div>
						<div 
							className="vflipcard-face vflipcard-back"
							style={ {
								backgroundImage: attributes.backImage ? `url(${ attributes.backImage })` : 'none',
								backgroundColor: attributes.backColor,
								backgroundSize:
									attributes.backImageSizing == 'percent' ?
										attributes.backImageSizePercent + '%' :
										attributes.backImageSizing,
							} }
						>
							<div class="vflipcard-back-body" style={ {
								padding: attributes.backContentPadding + `%`
							} }>
								<div>
									<InnerBlocks.Content />
								</div>
							</div>
						</div>
					</a>
				</label>
			</div>
		);
	},
} );
