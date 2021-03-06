/**
* @apiDefine assetGroup Assets
* Asset operations allow you to manage assets including renditions,
* manifests, images, and text tracks. To ingest assets, you must
* use the [Dynamic Ingest API](https://support.brightcove.com/node/17948) &mdash; the POST and PATCH operations shown here can be used to add and
* update remote assets. GET operations will work for both ingested and remote assets.
*/

// get assets

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets Get Assets
 * @apiName Get Assets
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets assets for a given video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} Rendition list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets
 *
 * @apiSuccess (Response Fields) {String} account_id the Video Cloud account id
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only whether this rendition contains only an audio track, no video track (a rendition for low bandwidth devices)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Object} drm DRM packaging details (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Number} encoding_rate average encoding rate in kbps
 * @apiSuccess (Response Fields) {Number} frame_height frame height in pixels
 * @apiSuccess (Response Fields) {Number} frame_width frame width in pixels
 * @apiSuccess (Response Fields) {String[]} key_systems array of strings that denote the kind of encryption used for DRM packaged renditions
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {String} video_codec not applicable to remote assets
 * @apiSuccess (Response Fields) {String} video_container not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} video_duration duration in milliseconds
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *    	{
 *    		"id": "5510490788001",
 *    		"account_id": "1752604059001",
 *    		"audio_only": false,
 *    		"cdn_origin_id": "5602",
 *    		"complete": true,
 *    		"controller_type": "DEFAULT",
 *    		"current_filename": "1752604059001_5510490788001_5510487311001-th.jpg",
 *    		"key_systems": [
 *    		],
 *    		"name": "Lightning-over-mosque-Utrecht.m4v Thumbnail",
 *    		"progressive_download": false,
 *    		"reference_id": "",
 *    		"remote_stream_name": "",
 *    		"remote_url": "",
 *    		"size": 2024,
 *    		"type": "THUMBNAIL",
 *    		"uploaded_at": "2017-07-17T17:46:22.523Z",
 *    		"updated_at": "2017-07-26T07:02:42.076Z",
 *    		"frame_height": 90,
 *    		"frame_width": 160
 *    	},
 *    	{
 *    		"id": "5510492050001",
 *    		"account_id": "1752604059001",
 *    		"audio_only": false,
 *    		"cdn_origin_id": "5602",
 *    		"complete": true,
 *    		"controller_type": "DEFAULT",
 *    		"current_filename": "1752604059001_5510492050001_5510487311001-vs.jpg",
 *    		"key_systems": [
 *    		],
 *    		"name": "Lightning-over-mosque-Utrecht.m4v Video Still",
 *    		"progressive_download": false,
 *    		"reference_id": "",
 *    		"remote_stream_name": "",
 *    		"remote_url": "",
 *    		"size": 41742,
 *    		"type": "VIDEO_STILL",
 *    		"uploaded_at": "2017-07-17T17:46:17.295Z",
 *    		"updated_at": "2017-07-26T07:02:42.077Z",
 *    		"frame_height": 720,
 *    		"frame_width": 1280
 *    	},
 *    	{
 *    		"id": "5510492151001",
 *    		"account_id": "1752604059001",
 *    		"audio_only": false,
 *    		"cdn_origin_id": "",
 *    		"complete": true,
 *    		"controller_type": "DEFAULT",
 *    		"current_filename": "1752604059001_5510492151001_5510487311001.mp4",
 *    		"key_systems": [
 *    		],
 *    		"name": "Lightning-over-mosque-Utrecht.m4v",
 *    		"progressive_download": true,
 *    		"reference_id": "",
 *    		"remote_stream_name": "",
 *    		"remote_url": "",
 *    		"size": 7135676,
 *    		"type": "DIGITAL_MASTER",
 *    		"uploaded_at": "2017-07-17T17:46:16.157Z",
 *    		"updated_at": "2017-07-17T17:46:31.126Z",
 *    		"drm": null,
 *    		"encoding_rate": 10508000,
 *    		"frame_height": 1080,
 *    		"frame_width": 1920,
 *    		"hds": null,
 *    		"hls": null,
 *    		"video_codec": "H264",
 *    		"video_container": "MP4",
 *    		"video_duration": 4578
 *    	}
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// get renditions

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/renditions Get Rendition List
 * @apiName Get Rendition List
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a list of renditions for a given video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} Rendition list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/renditions
 *
 * @apiSuccess (Response Fields) {String} account_id the Video Cloud account id
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only whether this rendition contains only an audio track, no video track (a rendition for low bandwidth devices)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Object} drm DRM packaging details (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Number} encoding_rate average encoding rate in kbps
 * @apiSuccess (Response Fields) {Number} frame_height frame height in pixels
 * @apiSuccess (Response Fields) {Number} frame_width frame width in pixels
 * @apiSuccess (Response Fields) {String[]} key_systems array of strings that denote the kind of encryption used for DRM packaged renditions
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {String} video_codec not applicable to remote assets
 * @apiSuccess (Response Fields) {String} video_container not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} video_duration duration in milliseconds
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        {
 *            "account_id": "57838016001",
 *            "audio_only": false,
 *            "cdn_origin_id": "",
 *            "complete": true,
 *            "controller_type": "DEFAULT",
 *            "current_filename": "",
 *            "drm": null,
 *            "encoding_rate": 983000,
 *            "frame_height": 360,
 *            "frame_width": 640,
 *            "hds": null,
 *            "hls": null,
 *            "id": "4665726463001",
 *            "name": "RA - Great Blue Heron",
 *            "key_systems": [],
 *            "progressive_download": false,
 *            "reference_id": "",
 *            "remote_stream_name": "",
 *            "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *            "size": 3887659,
 *            "type": "FULL_LENGTH",
 *            "updated_at": "2015-12-18T18:02:33.808Z",
 *            "uploaded_at": "2015-12-18T18:02:33.807Z",
 *            "video_codec": "NONE",
 *            "video_container": "UNKNOWN",
 *            "video_duration": 31487
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "audio_only": false,
 *            "cdn_origin_id": "",
 *            "complete": true,
 *            "controller_type": "DEFAULT",
 *            "current_filename": "",
 *            "drm": null,
 *            "encoding_rate": null,
 *            "frame_height": null,
 *            "frame_width": null,
 *            "hds": null,
 *            "hls": null,
 *            "id": "4665727973001",
 *            "name": "RA - Great Blue Heron",
 *            "progressive_download": false,
 *            "reference_id": "",
 *            "remote_stream_name": "",
 *            "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *            "size": 0,
 *            "type": "FULL_LENGTH",
 *            "updated_at": "2015-12-18T14:20:46.765Z",
 *            "uploaded_at": "2015-12-18T14:20:46.763Z",
 *            "video_codec": "NONE",
 *            "video_container": "UNKNOWN",
 *            "video_duration": 0
 *        }
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// get rendition

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/renditions/:asset_id Get Rendition
 * @apiName Get Rendition
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a specified rendition for a video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id the asset id
 *
 *
 * @apiParamExample {Url} Get Rendition Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/rendition/77874616001
 *
 * @apiSuccess (Response Fields) {String} account_id the Video Cloud account id
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} whether this rendition contains only an audio track, no video track (a rendition for low bandwidth devices)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Object} drm DRM packaging details (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Number} encoding_rate average encoding rate in kbps
 * @apiSuccess (Response Fields) {Number} frame_height frame height in pixels
 * @apiSuccess (Response Fields) {Number} frame_width frame width in pixels
 * @apiSuccess (Response Fields) {String[]} key_systems array of strings that denote the kind of encryption used for DRM packaged renditions
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {String} video_codec not applicable to remote assets
 * @apiSuccess (Response Fields) {String} video_container not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} video_duration duration in milliseconds
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "drm": null,
 *        "encoding_rate": 983000,
 *        "frame_height": 360,
 *        "frame_width": 640,
 *        "hds": null,
 *        "hls": null,
 *        "id": "4665726463001",
 *        "key_systems": [],
 *        "name": "RA - Great Blue Heron",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *        "size": 3887659,
 *        "type": "FULL_LENGTH",
 *        "updated_at": "2015-12-18T18:02:33.808Z",
 *        "uploaded_at": "2015-12-18T18:02:33.807Z",
 *        "video_codec": "NONE",
 *        "video_container": "UNKNOWN",
 *        "video_duration": 31487
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// add rendition

/**
 * @api {post} /accounts/:account_id/videos/:video_id/assets/renditions Add Rendition
 * @apiName Add Rendition
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Add a rendition to the given video. Ingested assets must be added via the [Dynamic Ingest API](https://support.brightcove.com/node/17948). **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 * @apiParam (Request Body Fields) {Boolean} [audio_only] whether this is only an audio track
 * @apiParam (Request Body Fields) {Number} [encoding_rate] average encoding_rate in kbps
 * @apiParam (Request Body Fields) {Number} [frame_height] frame height in pixels
 * @apiParam (Request Body Fields) {Number} [frame_width] frame width in pixels
 * @apiParam (Request Body Fields) {String} [name] asset name
 * @apiParam (Request Body Fields) {Boolean} [progressive_download] whether this is a progressive download video - **required for MP4 renditions**
 * @apiParam (Request Body Fields) {String} [reference_id] video reference-id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [size] the size of the asset in bytes (integer)
 * @apiParam (Request Body Fields) {Number} [video_duration] duration in milliseconds
 * @apiParam (Request Body Fields) {String} video_codec the video codec &mdash; support for video formats -  varies across browsers and devices; for the broadest support use `h264` &mdash; __remote assets will not work properly without this field__
 * @apiParam (Request Body Fields) {String} video_container the video container such as `MP4` or `MT2S` &mdash; __remote assets will not work properly without this field__
 *
 * @apiParamExample {json} Add Rendition Request Body Example:
 *    {
 *        "video_duration": 31487,
 *        "name": "RA - Great Blue Heron",
 *        "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *        "encoding_rate": 983000,
 *        "frame_height": 360,
 *        "size": 3887659,
 *        "frame_width": 640
 *    }
 *
 * @apiSuccess (Response Fields) {String} account_id the Video Cloud account id
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to thumbnails
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Object} drm DRM packaging details (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Number} encoding_rate average encoding rate in kbps
 * @apiSuccess (Response Fields) {Number} frame_height frame height in pixels
 * @apiSuccess (Response Fields) {Number} frame_width frame width in pixels
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiParam (Request Body Fields) {String} video_codec the video codec &mdash; support for video formats -  varies across browsers and devices; for the broadest support use `h264` &mdash; __remote assets will not work properly without this field__
 * @apiParam (Request Body Fields) {String} video_container the video container such as `MP4` or `MT2S` &mdash; __remote assets will not work properly without this field__
 * @apiSuccess (Response Fields) {Number} video_duration duration in milliseconds
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "drm": null,
 *        "encoding_rate": 983000,
 *        "frame_height": 360,
 *        "frame_width": 640,
 *        "hds": null,
 *        "hls": null,
 *        "id": "4665726463001",
 *        "name": "RA - Great Blue Heron",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *        "size": 3887659,
 *        "type": "FULL_LENGTH",
 *        "updated_at": "2015-12-18T18:02:33.808Z",
 *        "uploaded_at": "2015-12-18T18:02:33.807Z",
 *        "video_codec": "NONE",
 *        "video_container": "UNKNOWN",
 *        "video_duration": 31487
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 4xx) {json} MIXED_REMOTE_NOT_ALLOWED 403: Remote renditions may not be added to ingested videos
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 403 MIXED_REMOTE_NOT_ALLOWED
 *    HTTP/1.1 403 Forbidden
 *    [
 *        {
 *            "error_code": "MIXED_REMOTE_NOT_ALLOWED",
 *            "message": "It is forbidden to have only a subset of video renditions as remote assets."
 *        }
 *    ]
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 * @apiErrorExample 422 REQUIRED_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "remote_url: REQUIRED_FIELD"
 *        }
 *    ]
 *
 */

// patch renditions

/**
 * @api {patch} /accounts/:account_id/videos/:video_id/assets/renditions/:asset_id Update Rendition
 * @apiName Update Rendition
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Update the location for a remote rendition. Ingested renditions must be updated by retranscoding the video via [Dynamic Ingest](https://support.brightcove.com/node/17948) or Studio. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id id for the asset
 *
 * @apiParam (Request Body Fields) {Boolean} [audio_only] whether this is only an audio track
 * @apiParam (Request Body Fields) {Number} [encoding_rate] average encoding_rate in kbps
 * @apiParam (Request Body Fields) {Number} [frame_height] frame height in pixels
 * @apiParam (Request Body Fields) {Number} [frame_width] frame width in pixels
 * @apiParam (Request Body Fields) {String} [name] asset name
 * @apiParam (Request Body Fields) {String} [reference_id] video reference-id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [size] the size of the asset in bytes (integer)
 * @apiParam (Request Body Fields) {Number} [video_duration] duration in milliseconds
 * @apiParam (Request Body Fields) {String} [video_codec] the video codec &mdash; support for video formats varies across browsers and devices; for the broadest support use `h264`
 * @apiParam (Request Body Fields) {String} [video_container] the video container such as `MP4` or `MT2S`
 *
 * @apiParamExample {json} Add Rendition Request Body Example:
 *    {
 *        "video_duration": 31487,
 *        "name": "RA - Great Blue Heron",
 *        "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *        "encoding_rate": 983000,
 *        "frame_height": 360,
 *        "size": 3887659,
 *        "frame_width": 640
 *    }
 *
 * @apiSuccess (Response Fields) {String} account_id the Video Cloud account id
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to thumbnails
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Object} drm DRM packaging details (not applicable to remote assets)
 * @apiSuccess (Response Fields) {Number} encoding_rate average encoding rate in kbps
 * @apiSuccess (Response Fields) {Number} frame_height frame height in pixels
 * @apiSuccess (Response Fields) {Number} frame_width frame width in pixels
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {String} video_codec not applicable to remote assets
 * @apiSuccess (Response Fields) {String} video_container not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} video_duration duration in milliseconds
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "drm": null,
 *        "encoding_rate": 983000,
 *        "frame_height": 360,
 *        "frame_width": 640,
 *        "hds": null,
 *        "hls": null,
 *        "id": "4665726463001",
 *        "name": "RA - Great Blue Heron",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *        "size": 3887659,
 *        "type": "FULL_LENGTH",
 *        "updated_at": "2015-12-18T18:02:33.808Z",
 *        "uploaded_at": "2015-12-18T18:02:33.807Z",
 *        "video_codec": "NONE",
 *        "video_container": "UNKNOWN",
 *        "video_duration": 31487
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 4xx) {json} MIXED_REMOTE_NOT_ALLOWED 403: Remote renditions may not be added to ingested videos
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 403 MIXED_REMOTE_NOT_ALLOWED
 *    HTTP/1.1 403 Forbidden
 *    [
 *        {
 *            "error_code": "MIXED_REMOTE_NOT_ALLOWED",
 *            "message": "It is forbidden to have only a subset of video renditions as remote assets."
 *        }
 *    ]
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 *
 */

// delete rendition

/**
 * @api {delete} /accounts/:account_id/videos/:video_id/assets/renditions/:asset_id Delete Rendition
 * @apiName Delete Rendition
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes a rendition for the given video. **Note**: this operation is **only** for remote renditions for remote asset videos &mdash; do **not** use it for renditions created by Video Cloud for ingested videos
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id the asset id
 *
 *
 * @apiParamExample {Url} Delete Rendition Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/rendition/77874616001
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 204 NO CONTENT
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

 // get dynamic renditions

 /**
  * @api {get} /accounts/:account_id/videos/:video_id/assets/dynamic_renditions Get Dynamic Renditions
  * @apiName Get Dynamic Renditions
  * @apiGroup assetGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Gets a list of dynamic renditions for a Dynamic Delivery video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  *
  * @apiParamExample {Url} Rendition list Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/renditions
  *
  * @apiSuccess (Response Fields) {String} rendition_id the rendition id
  * @apiSuccess (Response Fields) {Boolean} media_type media type for the rendition (`audio` or `video`)
  * @apiSuccess (Response Fields) {Object} drm DRM packaging details (not applicable to remote assets)
  * @apiSuccess (Response Fields) {Number} encoding_rate average encoding rate in kbps
  * @apiSuccess (Response Fields) {Number} frame_height frame height in pixels
  * @apiSuccess (Response Fields) {Number} frame_width frame width in pixels
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
  * @apiSuccess (Response Fields) {Number} duration duration in milliseconds
  * @apiSuccess (Response Fields) {String} audio_configuration The audio configuration of the audio track
  * @apiSuccess (Response Fields) {String} variant The variant of the HLS profile (`baseline`, `main`, or `high`)
  *
  * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    [
  *        {
  *            "rendition_id": "default/audio128",
  *            "frame_height": null,
  *            "frame_width": null,
  *            "media_type": "audio",
  *            "size": 801796,
  *            "created_at": "2017-06-05T11:21:08.447Z",
  *            "updated_at": "2017-06-05T11:21:08.447Z",
  *            "encoding_rate": 125000,
  *            "duration": 49691,
  *            "audio_configuration": "L_R",
  *            "language": "en",
  *            "variant": "main"
  *        },
  *        {
  *            "rendition_id": "default/audio64",
  *            "frame_height": null,
  *            "frame_width": null,
  *            "media_type": "audio",
  *            "size": 413259,
  *            "created_at": "2017-06-05T11:21:08.399Z",
  *            "updated_at": "2017-06-05T11:21:08.399Z",
  *            "encoding_rate": 63000,
  *            "duration": 49691,
  *            "audio_configuration": "L_R",
  *            "language": "en",
  *            "variant": "main"
  *        },
  *        {
  *            "rendition_id": "default/audio96",
  *            "frame_height": null,
  *            "frame_width": null,
  *            "media_type": "audio",
  *            "size": 606234,
  *            "created_at": "2017-06-05T11:21:08.494Z",
  *            "updated_at": "2017-06-05T11:21:08.494Z",
  *            "encoding_rate": 96000,
  *            "duration": 49691,
  *            "audio_configuration": "L_R",
  *            "language": "en",
  *            "variant": "main"
  *        },
  *        {
  *            "rendition_id": "default/video1200",
  *            "frame_height": 540,
  *            "frame_width": 960,
  *            "media_type": "video",
  *            "size": 7454598,
  *            "created_at": "2017-06-05T11:21:38.687Z",
  *            "updated_at": "2017-06-05T11:21:38.687Z",
  *            "encoding_rate": 1198000,
  *            "duration": 49633,
  *            "variant": "main"
  *        },
  *        {
  *            "rendition_id": "default/video1700",
  *            "frame_height": 540,
  *            "frame_width": 960,
  *            "media_type": "video",
  *            "size": 10553021,
  *            "created_at": "2017-06-05T11:21:36.566Z",
  *            "updated_at": "2017-06-05T11:21:36.566Z",
  *            "encoding_rate": 1697000,
  *            "duration": 49633,
  *            "variant": "main"
  *        },
  *        {
  *            "rendition_id": "default/video2000",
  *            "frame_height": 720,
  *            "frame_width": 1280,
  *            "media_type": "video",
  *            "size": 12458619,
  *            "created_at": "2017-06-05T11:21:44.306Z",
  *            "updated_at": "2017-06-05T11:21:44.306Z",
  *            "encoding_rate": 2004000,
  *            "duration": 49633,
  *            "variant": "main"
  *        },
  *        {
  *            "rendition_id": "default/video450",
  *            "frame_height": 270,
  *            "frame_width": 480,
  *            "media_type": "video",
  *            "size": 2803606,
  *            "created_at": "2017-06-05T11:21:33.204Z",
  *            "updated_at": "2017-06-05T11:21:33.204Z",
  *            "encoding_rate": 449000,
  *            "duration": 49633,
  *            "variant": "main"
  *        },
  *        {
  *            "rendition_id": "default/video700",
  *            "frame_height": 360,
  *            "frame_width": 640,
  *            "media_type": "video",
  *            "size": 4343474,
  *            "created_at": "2017-06-05T11:21:40.947Z",
  *            "updated_at": "2017-06-05T11:21:40.947Z",
  *            "encoding_rate": 697000,
  *            "duration": 49633,
  *            "variant": "main"
  *        },
  *        {
  *            "rendition_id": "default/video900",
  *            "frame_height": 360,
  *            "frame_width": 640,
  *            "media_type": "video",
  *            "size": 5595772,
  *            "created_at": "2017-06-05T11:21:37.728Z",
  *            "updated_at": "2017-06-05T11:21:37.728Z",
  *            "encoding_rate": 898000,
  *            "duration": 49633,
  *            "variant": "main"
  *        }
  *    ]
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
  * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 Error Response
  *     HTTP/1.1 404 Not Found
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  *
  */


 // get captions

 /**
  * @api {get} /accounts/:account_id/videos/:video_id/assets/caption Get Caption List
  * @apiName Get Caption List
  * @apiGroup assetGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Gets the caption file for a given video (DFXP captions for the Smart Player). **Note**: 1) the caption endpoint is ONLY for working with DFXP captions used in the legacy Smart Player - WebVTT captions (text_tracks) for the new Brightcove Player are managed using the Update Video operation; 2) you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  *
  * @apiParamExample {Url} Caption list Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/caption
  *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to captions
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
  *
 * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    {
  *        "account_id": "57838016001",
  *        "audio_only": false,
  *        "cdn_origin_id": "",
  *        "complete": true,
  *        "controller_type": "DEFAULT",
  *        "current_filename": "",
  *        "id": "4665727870001",
  *        "name": "",
  *        "progressive_download": false,
  *        "reference_id": "",
  *        "remote_stream_name": "",
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/Video-Cloud.DFXP.xml",
  *        "size": 0,
  *        "type": "CAPTION",
  *        "updated_at": "2015-12-18T14:52:47.758Z",
  *        "uploaded_at": "2015-12-18T14:52:47.758Z"
  *    }
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 Error Response
  *     HTTP/1.1 404 Not Found
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  *
  */

 // get caption

 /**
  * @api {get} /accounts/:account_id/videos/:video_id/assets/caption/:asset_id Get Caption
  * @apiName Get Caption
  * @apiGroup assetGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Gets a caption file for a given video (DFXP captions for the Smart Player). **Note**: 1) the caption endpoint is ONLY for working with DFXP captions used in the legacy Smart Player - WebVTT captions (text_tracks) for the new Brightcove Player are managed using the Update Video operation; 2) you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  * @apiParam (Path Parameters) {String} asset_id the asset id
  *
  *
  * @apiParamExample {Url} Caption Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/caption/77874616001
  *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to captions
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
  *
  * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    {
  *        "account_id": "57838016001",
  *        "audio_only": false,
  *        "cdn_origin_id": "",
  *        "complete": true,
  *        "controller_type": "DEFAULT",
  *        "current_filename": "",
  *        "id": "4665727870001",
  *        "name": "",
  *        "progressive_download": false,
  *        "reference_id": "",
  *        "remote_stream_name": "",
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/Video-Cloud.DFXP.xml",
  *        "size": 0,
  *        "type": "CAPTION",
  *        "updated_at": "2015-12-18T14:52:47.758Z",
  *        "uploaded_at": "2015-12-18T14:52:47.758Z"
  *    }
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 Error Response
  *     HTTP/1.1 404 Not Found
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  *
  */

 // post captions

 /**
  * @api {post} /accounts/:account_id/videos/:video_id/assets/caption Add Caption
  * @apiName Add Caption
  * @apiGroup assetGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Adds a caption file for a remote asset (DFXP captions for the Smart Player). **Note**: 1) the caption endpoint is ONLY for working with DFXP captions used in the legacy Smart Player - WebVTT captions (text_tracks) for the new Brightcove Player are managed using the Update Video operation; 2) you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
  * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
  *
  * @apiParamExample {json} Add Captions Request Data Example:
  *    {
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/Video-Cloud-Analytics-Performance-Report.DFXP.xml"
  *    }
  *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to captions
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
  *
 * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    {
  *        "account_id": "57838016001",
  *        "audio_only": false,
  *        "cdn_origin_id": "",
  *        "complete": true,
  *        "controller_type": "DEFAULT",
  *        "current_filename": "",
  *        "id": "4665727870001",
  *        "name": "",
  *        "progressive_download": false,
  *        "reference_id": "",
  *        "remote_stream_name": "",
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/Video-Cloud.DFXP.xml",
  *        "size": 0,
  *        "type": "CAPTION",
  *        "updated_at": "2015-12-18T14:52:47.758Z",
  *        "uploaded_at": "2015-12-18T14:52:47.758Z"
  *    }
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
  * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
  *     HTTP/1.1 404 RESOURCE_NOT_FOUND
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  * @apiErrorExample {json} 409 CONFLICT
  *     HTTP/1.1 409 CONFLICT
  *     [
  *         {
  *             "error_code": "REFERENCE_ID_IN_USE",
  *             "message": "Reference id moose_2015_09_17 is already in use."
  *         }
  *     ]
  *
  * @apiErrorExample 400 Bad Request
  *    HTTP/1.1 400 Bad Request
  *    {
  *        "error_code": "BAD_VALUE",
  *        "message": "Unable to process JSON"
  *    }
  *
  * @apiErrorExample 422 ILLEGAL_FIELD
  *    HTTP/1.1 422 Unprocessable Entity
  *    [
  *        {
  *            "error_code": "VALIDATION_ERROR",
  *            "message": "foo: ILLEGAL_FIELD"
  *        }
  *    ]
  *
  * @apiErrorExample 422 REQUIRED_FIELD
  *    HTTP/1.1 422 Unprocessable Entity
  *    [
  *        {
  *            "error_code": "VALIDATION_ERROR",
  *            "message": "remote_url: REQUIRED_FIELD"
  *        }
  *    ]
  *
  */

 // patch captions

 /**
  * @api {patch} /accounts/:account_id/videos/:video_id/assets/caption/:asset_id Update Caption
  * @apiName Update Caption
  * @apiGroup assetGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Updates the location of a remote caption file for a remote asset (DFXP captions for the Smart Player). **Note**: 1) the caption endpoint is ONLY for working with DFXP captions used in the legacy Smart Player - WebVTT captions (text_tracks) for the new Brightcove Player are managed using the Update Video operation; 2) you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  * @apiParam (Path Parameters) {String} asset_id id for the asset
  *
  * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
  * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
  *
  * @apiParamExample {json} Add Captions Request Data Example:
  *    {
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/Video-Cloud-Analytics-Performance-Report.DFXP.xml"
  *    }
  *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to captions
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
  *
 * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    {
  *        "account_id": "57838016001",
  *        "audio_only": false,
  *        "cdn_origin_id": "",
  *        "complete": true,
  *        "controller_type": "DEFAULT",
  *        "current_filename": "",
  *        "id": "4665727870001",
  *        "name": "",
  *        "progressive_download": false,
  *        "reference_id": "",
  *        "remote_stream_name": "",
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/Video-Cloud.DFXP.xml",
  *        "size": 0,
  *        "type": "CAPTION",
  *        "updated_at": "2015-12-18T14:52:47.758Z",
  *        "uploaded_at": "2015-12-18T14:52:47.758Z"
  *    }
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
  * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
  *     HTTP/1.1 404 RESOURCE_NOT_FOUND
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  * @apiErrorExample {json} 409 CONFLICT
  *     HTTP/1.1 409 CONFLICT
  *     [
  *         {
  *             "error_code": "REFERENCE_ID_IN_USE",
  *             "message": "Reference id moose_2015_09_17 is already in use."
  *         }
  *     ]
  *
  * @apiErrorExample 400 Bad Request
  *    HTTP/1.1 400 Bad Request
  *    {
  *        "error_code": "BAD_VALUE",
  *        "message": "Unable to process JSON"
  *    }
  *
  * @apiErrorExample 422 ILLEGAL_FIELD
  *    HTTP/1.1 422 Unprocessable Entity
  *    [
  *        {
  *            "error_code": "VALIDATION_ERROR",
  *            "message": "foo: ILLEGAL_FIELD"
  *        }
  *    ]
  *
  *
  */

  // delete caption

  /**
   * @api {delete} /accounts/:account_id/videos/:video_id/assets/caption/:asset_id Delete Caption
   * @apiName Delete Caption
   * @apiGroup assetGroup
   * @apiVersion 1.0.0
   *
   * @apiDescription Deletes a caption file for a remote asset (DFXP captions for the Smart Player). **Note**: 1) the caption endpoint is ONLY for working with DFXP captions used in the legacy Smart Player - WebVTT captions (text_tracks) for the new Brightcove Player are managed using the Update Video operation; 2) you can use `/videos/ref:reference_id` instead of `/videos/video_id`
   *
   * @apiHeader {String} Content-Type Content-Type: application/json
   * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
   *
   * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
   * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
   * @apiParam (Path Parameters) {String} asset_id the asset id
   *
   *
   * @apiParamExample {Url} Delete Caption Example:
   *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/caption/77874616001
   *
   *
  * @apiSuccessExample {json} Success Response:
   *    HTTP/1.1 204 NO CONTENT
   *
   * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
   * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
   * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
   * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
   * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
   * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
   *
   * @apiErrorExample {json} 401 UNAUTHORIZED
   *     HTTP/1.1 401 UNAUTHORIZED
   *     [
   *         {
   *             "error_code": "UNAUTHORIZED",
   *             "message": "Permission denied."
   *         }
   *     ]
   *
   * @apiErrorExample {json} 404 Error Response
   *     HTTP/1.1 404 Not Found
   *     [
   *         {
   *             "error_code": "RESOURCE_NOT_FOUND"
   *         }
   *     ]
   *
   *
   */



  // get posters

  /**
   * @api {get} /accounts/:account_id/videos/:video_id/assets/poster Get Poster List
   * @apiName Get Poster List
   * @apiGroup assetGroup
   * @apiVersion 1.0.0
   *
   * @apiDescription Gets the poster file for a given video. Note that you can only add one poster for a video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
   *
   * @apiHeader {String} Content-Type Content-Type: application/json
   * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
   *
   * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
   * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
   *
   *
   * @apiParamExample {Url} Poster list Example:
   *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/poster
   *
  * @apiSuccess (Response Fields) {String} id the asset id
  * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to posters
  * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
  * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
  * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
  * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
  * @apiSuccess (Response Fields) {String} name asset name
  * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
  * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
  * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
  * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {String} type the type of the asset
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
   *
  * @apiSuccessExample {json} Success Response:
   *    HTTP/1.1 200 OK
   *    {
   *        "account_id": "57838016001",
   *        "audio_only": false,
   *        "cdn_origin_id": "",
   *        "complete": true,
   *        "controller_type": "DEFAULT",
   *        "current_filename": "",
   *        "frame_height": null,
   *        "frame_width": null,
   *        "id": "4665727869001",
   *        "name": "",
   *        "progressive_download": false,
   *        "reference_id": "",
   *        "remote_stream_name": "",
   *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-poster.png",
   *        "size": 0,
   *        "type": "VIDEO_STILL",
   *        "updated_at": "2015-12-18T14:42:22.439Z",
   *        "uploaded_at": "2015-12-18T14:42:22.436Z"
   *    }
   *
   * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
   * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
   * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
   * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
   * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
   * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
   *
   * @apiErrorExample {json} 401 UNAUTHORIZED
   *     HTTP/1.1 401 UNAUTHORIZED
   *     [
   *         {
   *             "error_code": "UNAUTHORIZED",
   *             "message": "Permission denied."
   *         }
   *     ]
   *
   * @apiErrorExample {json} 404 Error Response
   *     HTTP/1.1 404 Not Found
   *     [
   *         {
   *             "error_code": "RESOURCE_NOT_FOUND"
   *         }
   *     ]
   *
   *
   */

  // get poster

  /**
   * @api {get} /accounts/:account_id/videos/:video_id/assets/poster/:asset_id Get Poster
   * @apiName Get Poster
   * @apiGroup assetGroup
   * @apiVersion 1.0.0
   *
   * @apiDescription Gets a poster file for a given video. Note that you can only add one poster for a video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
   *
   * @apiHeader {String} Content-Type Content-Type: application/json
   * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
   *
   * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
   * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
   * @apiParam (Path Parameters) {String} asset_id the asset id
   *
   *
   * @apiParamExample {Url} Poster Example:
   *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/poster/77874616001
   *
  * @apiSuccess (Response Fields) {String} id the asset id
  * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to posters
  * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
  * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
  * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
  * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
  * @apiSuccess (Response Fields) {String} name asset name
  * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
  * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
  * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
  * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {String} type the type of the asset
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
   *
  * @apiSuccessExample {json} Success Response:
   *    HTTP/1.1 200 OK
   *    {
   *        "account_id": "57838016001",
   *        "audio_only": false,
   *        "cdn_origin_id": "",
   *        "complete": true,
   *        "controller_type": "DEFAULT",
   *        "current_filename": "",
   *        "frame_height": null,
   *        "frame_width": null,
   *        "id": "4665727869001",
   *        "name": "",
   *        "progressive_download": false,
   *        "reference_id": "",
   *        "remote_stream_name": "",
   *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-poster.png",
   *        "size": 0,
   *        "type": "VIDEO_STILL",
   *        "updated_at": "2015-12-18T14:42:22.439Z",
   *        "uploaded_at": "2015-12-18T14:42:22.436Z"
   *    }
   *
   * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
   * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
   * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
   * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
   * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
   * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
   *
   * @apiErrorExample {json} 401 UNAUTHORIZED
   *     HTTP/1.1 401 UNAUTHORIZED
   *     [
   *         {
   *             "error_code": "UNAUTHORIZED",
   *             "message": "Permission denied."
   *         }
   *     ]
   *
   * @apiErrorExample {json} 404 Error Response
   *     HTTP/1.1 404 Not Found
   *     [
   *         {
   *             "error_code": "RESOURCE_NOT_FOUND"
   *         }
   *     ]
   *
   *
   */

  // post posters

  /**
   * @api {post} /accounts/:account_id/videos/:video_id/assets/poster Add Poster
   * @apiName Add Poster
   * @apiGroup assetGroup
   * @apiVersion 1.0.0
   *
   * @apiDescription Adds a poster file for a remote asset. Ingested assets must be added via the [Dynamic Ingest API](https://support.brightcove.com/node/17948). **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
   *
   * @apiHeader {String} Content-Type Content-Type: application/json
   * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
   *
   * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
   * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
   *
   * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
   * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
   *
   * @apiParamExample {json} Add Posters Request Data Example:
   *    {
   *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-poster.png"
   *    }
   *
  * @apiSuccess (Response Fields) {String} id the asset id
  * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to posters
  * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
  * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
  * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
  * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
  * @apiSuccess (Response Fields) {String} name asset name
  * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
  * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
  * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
  * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {String} type the type of the asset
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
   *
  * @apiSuccessExample {json} Success Response:
   *    HTTP/1.1 200 OK
   *    {
   *        "account_id": "57838016001",
   *        "audio_only": false,
   *        "cdn_origin_id": "",
   *        "complete": true,
   *        "controller_type": "DEFAULT",
   *        "current_filename": "",
   *        "frame_height": null,
   *        "frame_width": null,
   *        "id": "4665727869001",
   *        "name": "",
   *        "progressive_download": false,
   *        "reference_id": "",
   *        "remote_stream_name": "",
   *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-poster.png",
   *        "size": 0,
   *        "type": "VIDEO_STILL",
   *        "updated_at": "2015-12-18T14:42:22.439Z",
   *        "uploaded_at": "2015-12-18T14:42:22.436Z"
   *    }
   *
   * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
   * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
   * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
   * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
   * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
   * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
   * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
   * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
   *
   *
   * @apiErrorExample {json} 401 UNAUTHORIZED
   *     HTTP/1.1 401 UNAUTHORIZED
   *     [
   *         {
   *             "error_code": "UNAUTHORIZED",
   *             "message": "Permission denied."
   *         }
   *     ]
   *
   * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
   *     HTTP/1.1 404 RESOURCE_NOT_FOUND
   *     [
   *         {
   *             "error_code": "RESOURCE_NOT_FOUND"
   *         }
   *     ]
   *
   * @apiErrorExample {json} 409 CONFLICT
   *     HTTP/1.1 409 CONFLICT
   *     [
   *         {
   *             "error_code": "REFERENCE_ID_IN_USE",
   *             "message": "Reference id moose_2015_09_17 is already in use."
   *         }
   *     ]
   *
   * @apiErrorExample 400 Bad Request
   *    HTTP/1.1 400 Bad Request
   *    {
   *        "error_code": "BAD_VALUE",
   *        "message": "Unable to process JSON"
   *    }
   *
   * @apiErrorExample 422 ILLEGAL_FIELD
   *    HTTP/1.1 422 Unprocessable Entity
   *    [
   *        {
   *            "error_code": "VALIDATION_ERROR",
   *            "message": "foo: ILLEGAL_FIELD"
   *        }
   *    ]
   *
   * @apiErrorExample 422 REQUIRED_FIELD
   *    HTTP/1.1 422 Unprocessable Entity
   *    [
   *        {
   *            "error_code": "VALIDATION_ERROR",
   *            "message": "remote_url: REQUIRED_FIELD"
   *        }
   *    ]
   */

  // patch poster

  /**
   * @api {patch} /accounts/:account_id/videos/:video_id/assets/poster/:asset_id Update Poster
   * @apiName Update Poster
   * @apiGroup assetGroup
   * @apiVersion 1.0.0
   *
   * @apiDescription Updates the location of a remote poster file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
   *
   * @apiHeader {String} Content-Type Content-Type: application/json
   * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
   *
   * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
   * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
   * @apiParam (Path Parameters) {String} asset_id id for the asset
   *
   * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
   * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
   *
   * @apiParamExample {json} Add Posters Request Data Example:
   *    {
   *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-poster.png"
   *    }
   *
  * @apiSuccess (Response Fields) {String} id the asset id
  * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to posters
  * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
  * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
  * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
  * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
  * @apiSuccess (Response Fields) {String} name asset name
  * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
  * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
  * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
  * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {String} type the type of the asset
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
   *
  * @apiSuccessExample {json} Success Response:
   *    HTTP/1.1 200 OK
   *    {
   *        "account_id": "57838016001",
   *        "audio_only": false,
   *        "cdn_origin_id": "",
   *        "complete": true,
   *        "controller_type": "DEFAULT",
   *        "current_filename": "",
   *        "frame_height": null,
   *        "frame_width": null,
   *        "id": "4665727869001",
   *        "name": "",
   *        "progressive_download": false,
   *        "reference_id": "",
   *        "remote_stream_name": "",
   *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-poster.png",
   *        "size": 0,
   *        "type": "VIDEO_STILL",
   *        "updated_at": "2015-12-18T14:42:22.439Z",
   *        "uploaded_at": "2015-12-18T14:42:22.436Z"
   *    }
   *
   * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
   * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
   * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
   * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
   * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
   * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
   * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
   * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
   *
   *
   * @apiErrorExample {json} 401 UNAUTHORIZED
   *     HTTP/1.1 401 UNAUTHORIZED
   *     [
   *         {
   *             "error_code": "UNAUTHORIZED",
   *             "message": "Permission denied."
   *         }
   *     ]
   *
   * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
   *     HTTP/1.1 404 RESOURCE_NOT_FOUND
   *     [
   *         {
   *             "error_code": "RESOURCE_NOT_FOUND"
   *         }
   *     ]
   *
   * @apiErrorExample {json} 409 CONFLICT
   *     HTTP/1.1 409 CONFLICT
   *     [
   *         {
   *             "error_code": "REFERENCE_ID_IN_USE",
   *             "message": "Reference id moose_2015_09_17 is already in use."
   *         }
   *     ]
   *
   * @apiErrorExample 400 Bad Request
   *    HTTP/1.1 400 Bad Request
   *    {
   *        "error_code": "BAD_VALUE",
   *        "message": "Unable to process JSON"
   *    }
   *
   * @apiErrorExample 422 ILLEGAL_FIELD
   *    HTTP/1.1 422 Unprocessable Entity
   *    [
   *        {
   *            "error_code": "VALIDATION_ERROR",
   *            "message": "foo: ILLEGAL_FIELD"
   *        }
   *    ]
   *
   *
   */

   // delete poster

   /**
    * @api {delete} /accounts/:account_id/videos/:video_id/assets/poster/:asset_id Delete Poster
    * @apiName Delete Poster
    * @apiGroup assetGroup
    * @apiVersion 1.0.0
    *
    * @apiDescription Deletes a poster file for a remote asset. Note that you can only add one poster for a video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
    *
    * @apiHeader {String} Content-Type Content-Type: application/json
    * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
    *
    * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
    * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
    * @apiParam (Path Parameters) {String} asset_id the asset id
    *
    *
    * @apiParamExample {Url} Delete Poster Example:
    *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/poster/77874616001
    *
    *
 * @apiSuccessExample {json} Success Response:
    *    HTTP/1.1 204 NO CONTENT
    *
    * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
    * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
    * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
    * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
    * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
    * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
    *
    * @apiErrorExample {json} 401 UNAUTHORIZED
    *     HTTP/1.1 401 UNAUTHORIZED
    *     [
    *         {
    *             "error_code": "UNAUTHORIZED",
    *             "message": "Permission denied."
    *         }
    *     ]
    *
    * @apiErrorExample {json} 404 Error Response
    *     HTTP/1.1 404 Not Found
    *     [
    *         {
    *             "error_code": "RESOURCE_NOT_FOUND"
    *         }
    *     ]
    *
    *
    */


// get thumbnails

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/thumbnail Get Thumbnail List
 * @apiName Get Thumbnail List
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the thumbnail for a given video. Note that you can only add one thumbnail for a video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} Thumbnail list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/thumbnail
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to thumbnails
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "frame_height": null,
 *        "frame_width": null,
 *        "id": "4665727869001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-thumbnail.png",
 *        "size": 0,
 *        "type": "THUMBNAIL",
 *        "updated_at": "2015-12-18T14:42:22.439Z",
 *        "uploaded_at": "2015-12-18T14:42:22.436Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// get thumbnail

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/thumbnail/:asset_id Get Thumbnail
 * @apiName Get Thumbnail
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a thumbnail file for a given video. Note that you can only add one thumbnail for a video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id the asset id
 *
 *
 * @apiParamExample {Url} Thumbnail Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/thumbnail/77874616001
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to thumbnails
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "frame_height": null,
 *        "frame_width": null,
 *        "id": "4665727869001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-thumbnail.png",
 *        "size": 0,
 *        "type": "THUMBNAIL",
 *        "updated_at": "2015-12-18T14:42:22.439Z",
 *        "uploaded_at": "2015-12-18T14:42:22.436Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// post thumbnails

/**
 * @api {post} /accounts/:account_id/videos/:video_id/assets/thumbnail Add Thumbnail
 * @apiName Add Thumbnail
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Adds a thumbnail file for a remote asset. Ingested assets must be added via the [Dynamic Ingest API](https://support.brightcove.com/node/17948). **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17948))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 *
 * @apiParamExample {json} Add Thumbnails Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-thumbnail.png"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to thumbnails
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "frame_height": null,
 *        "frame_width": null,
 *        "id": "4665727869001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-thumbnail.png",
 *        "size": 0,
 *        "type": "THUMBNAIL",
 *        "updated_at": "2015-12-18T14:42:22.439Z",
 *        "uploaded_at": "2015-12-18T14:42:22.436Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 * @apiErrorExample 422 REQUIRED_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "remote_url: REQUIRED_FIELD"
 *        }
 *    ]
 */

// patch thumbnail

/**
 * @api {patch} /accounts/:account_id/videos/:video_id/assets/thumbnail/:asset_id Update Thumbnail
 * @apiName Update Thumbnail
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the location of a remote thumbnail file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17948))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id id for the asset
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 *
 * @apiParamExample {json} Add Thumbnails Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-thumbnail.png"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to thumbnails
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "frame_height": null,
 *        "frame_width": null,
 *        "id": "4665727869001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-thumbnail.png",
 *        "size": 0,
 *        "type": "THUMBNAIL",
 *        "updated_at": "2015-12-18T14:42:22.439Z",
 *        "uploaded_at": "2015-12-18T14:42:22.436Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 *
 */

 // delete thumbnail

 /**
  * @api {delete} /accounts/:account_id/videos/:video_id/assets/thumbnail/:asset_id Delete Thumbnail
  * @apiName Delete Thumbnail
  * @apiGroup assetGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Deletes a thumbnail file for a remote asset. Note that you can only add one thumbnail for a video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17948))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  * @apiParam (Path Parameters) {String} asset_id the asset id
  *
  *
  * @apiParamExample {Url} Delete Thumbnail Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/thumbnail/77874616001
  *
  *
 * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 204 NO CONTENT
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 Error Response
  *     HTTP/1.1 404 Not Found
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  *
  */



// get hls_manifest

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/hls_manifest Get HLS Manifest List
 * @apiName Get HLS Manifest List
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the hls_manifest for a given video. **Notes**: 1) you can use `/videos/ref:reference_id` instead of `/videos/video_id` 2) this method only returns a **remote asset** HTL manifest, **not** manifests for ingested videos
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} HLS Manifest list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/hls_manifest
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to hls_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.m3u8",
 *        "size": 0,
 *        "type": "HLS_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// get hls_manifest

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/hls_manifest/:asset_id Get HLS Manifest
 * @apiName Get HLS Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets an hls_manifest for a given video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} HLS Manifest Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/hls_manifest/77874616001
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to hls_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.m3u8",
 *        "size": 0,
 *        "type": "HLS_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// post hls_manifest

/**
 * @api {post} /accounts/:account_id/videos/:video_id/assets/hls_manifest Add HLS Manifest
 * @apiName Add HLS Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Adds the location of an hls_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [video_duration] the duration of the video in seconds
 *
 * @apiParamExample {json} Add HLS Manifest Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.m3u8"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to hls_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.m3u8",
 *        "size": 0,
 *        "type": "HLS_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 * @apiErrorExample 422 REQUIRED_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "remote_url: REQUIRED_FIELD"
 *        }
 *    ]
 *
 */

// patch hls_manifest

/**
 * @api {patch} /accounts/:account_id/videos/:video_id/assets/hls_manifest/:asset_id Update HLS Manifest
 * @apiName Update HLS Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the location of a remote hls_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id id for the asset
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [video_duration] the duration of the video in seconds
 *
 * @apiParamExample {json} Add HLS Manifest Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.m3u8"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to hls_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.m3u8",
 *        "size": 0,
 *        "type": "HLS_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 *
 *
 */

 // delete hls_manifest

 /**
  * @api {delete} /accounts/:account_id/videos/:video_id/assets/hls_manifest/:asset_id Delete HLS Manifest
  * @apiName Delete HLS Manifest
  * @apiGroup assetGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Deletes an hls_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  *
  * @apiParamExample {Url} Delete HLS Manifest Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/hls_manifest/77874616001
  *
  *
 * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 204 NO CONTENT
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 Error Response
  *     HTTP/1.1 404 Not Found
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  *
  */

// get hds_manifests

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/hds_manifest Get HDS Manifest List
 * @apiName Get HDS Manifest List
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the hds_manifest file for a given video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} HDS Manifest list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/hds_manifest
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to hds_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hds/chickadee/chickadee.f4v",
 *        "size": 0,
 *        "type": "HDS_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// get hds_manifest

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/hds_manifest/:asset_id Get HDS Manifest
 * @apiName Get HDS Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the hds_manifest file for a given video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} HDS Manifest list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/hds_manifest/77874616001
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to hds_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hds/chickadee/chickadee.f4v",
 *        "size": 0,
 *        "type": "HDS_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// post hds_manifests

/**
 * @api {post} /accounts/:account_id/videos/:video_id/assets/hds_manifest Add HDS Manifest
 * @apiName Add HDS Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Adds the location of an hds_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [video_duration] the duration of the video in seconds
 *
 * @apiParamExample {json} Add HDS Manifest Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.f4v"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to hds_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hds/chickadee/chickadee.f4v",
 *        "size": 0,
 *        "type": "HDS_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 *     ]
 *
 * @apiErrorExample 422 REQUIRED_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "remote_url: REQUIRED_FIELD"
 *        }
 *    ]
 *
 */

// patch hds_manifests

/**
 * @api {patch} /accounts/:account_id/videos/:video_id/assets/hds_manifest/:asset_id Update HDS Manifest
 * @apiName Update HDS Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the location of a remote hds_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id id for the asset
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [video_duration] the duration of the video in seconds
 *
 * @apiParamExample {json} Add HDS Manifest Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.f4v"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to hds_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hds/chickadee/chickadee.f4v",
 *        "size": 0,
 *        "type": "HDS_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 *
 */

 // delete hds_manifest

 /**
  * @api {delete} /accounts/:account_id/videos/:video_id/assets/hds_manifest/:asset_id Delete HDS Manifest
  * @apiName Delete HDS Manifest
  * @apiGroup assetGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Deletes an hds_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  *
  * @apiParamExample {Url} Delete HDS Manifest list Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/hds_manifest/77874616001
  *
  *
 * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 204 NO CONTENT
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 Error Response
  *     HTTP/1.1 404 Not Found
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  *
  */


// get ism_manifests

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/ism_manifest Get ISM Manifest List
 * @apiName Get ISM Manifest List
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the ism_manifest for a given video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} ISM Manifest list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/ism_manifest
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to ism_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.ism",
 *        "size": 0,
 *        "type": "ISM_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// get ism_manifest

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/ism_manifest/:asset_id Get ISM Manifest
 * @apiName Get ISM Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets an ism_manifest for a given video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} ISM Manifest list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/ism_manifest/77874616001
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to ism_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.ism",
 *        "size": 0,
 *        "type": "ISM_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// post ism_manifests

/**
 * @api {post} /accounts/:account_id/videos/:video_id/assets/ism_manifest Add ISM Manifest
 * @apiName Add ISM Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Adds the location of an ism_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [video_duration] the duration of the video in seconds
 *
 * @apiParamExample {json} Add ISM Manifest Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.ism"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to ism_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.ism",
 *        "size": 0,
 *        "type": "ISM_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 * @apiErrorExample 422 REQUIRED_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "remote_url: REQUIRED_FIELD"
 *        }
 *    ]
 *
 */

// patch ism_manifests

/**
 * @api {patch} /accounts/:account_id/videos/:video_id/assets/ism_manifest/:asset_id Update ISM Manifest
 * @apiName Update ISM Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the location of a remote ism_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id id for the asset
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [video_duration] the duration of the video in seconds
 *
 * @apiParamExample {json} Add ISM Manifest Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.ism"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to ism_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.ism",
 *        "size": 0,
 *        "type": "ISM_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 *
 *
 */

 // delete ism_manifest

 /**
  * @api {delete} /accounts/:account_id/videos/:video_id/assets/ism_manifest/:asset_id Delete ISM Manifest
  * @apiName Get ISM Manifest
  * @apiGroup assetGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Deletes an ism_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  *
  * @apiParamExample {Url} Delete ISM Manifest list Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/ism_manifest/77874616001
  *
  *
 * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 204 NO CONTENT
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 Error Response
  *     HTTP/1.1 404 Not Found
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  *
  */


 // get ismc_manifests

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/ismc_manifest Get ISMC Manifest List
 * @apiName Get ISMC Manifest List
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the ismc_manifest files for a given video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} ISMC Manifest list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/ismc_manifest
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to ismc_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.ismc",
 *        "size": 0,
 *        "type": "ISMC_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// get ismc_manifest

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/ismc_manifest/:asset_id Get ISMC Manifest
 * @apiName Get ISMC Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the ismc_manifest file for a given video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} ISMC Manifest list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/ismc_manifest/77874616001
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to ismc_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.ismc",
 *        "size": 0,
 *        "type": "ISMC_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// post ismc_manifests

/**
 * @api {post} /accounts/:account_id/videos/:video_id/assets/ismc_manifest Add ISMC Manifest
 * @apiName Add ISMC Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Adds the location of an ismc_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [video_duration] the duration of the video in seconds
 *
 * @apiParamExample {json} Add ISMC Manifest Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.ismc"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to ismc_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.ismc",
 *        "size": 0,
 *        "type": "ISMC_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 * @apiErrorExample 422 REQUIRED_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "remote_url: REQUIRED_FIELD"
 *        }
 *    ]
 */

// patch ismc_manifests

/**
 * @api {patch} /accounts/:account_id/videos/:video_id/assets/ismc_manifest/:asset_id Update ISMC Manifest
 * @apiName Update ISMC Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the location of a remote ismc_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id id for the asset
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [video_duration] the duration of the video in seconds
 *
 * @apiParamExample {json} Add ISMC Manifest Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.ismc"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to ismc_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.ismc",
 *        "size": 0,
 *        "type": "ISMC_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 *
 *
 */

 // delete ismc_manifest

 /**
  * @api {delete} /accounts/:account_id/videos/:video_id/assets/ismc_manifest/:asset_id Delete ISMC Manifest
  * @apiName Delete ISMC Manifest
  * @apiGroup assetGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Deletes an ismc_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925)
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  *
  * @apiParamExample {Url} Delete ISMC Manifest list Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/ismc_manifest/77874616001
  *
  *
 * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 204 NO CONTENT
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 Error Response
  *     HTTP/1.1 404 Not Found
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  *
  *
  */


// get dash_manifests

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/dash_manifests Get DASH Manifest List
 * @apiName Get DASH Manifest List
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the dash_manifests for a given video. **Notes**: 1. you can have multiple dash manifests with profiles; you can have only one dash manifest without a profile, but one manifest without a profile can be combined with muliple manifests with profiles; 2. all manifests intended to be used with the CMS API should include a profile - only DASH manifests with profiles will be returned by the CMS API &mdash; only a single DASH manifest without a profile will be returned by the Media API 3. you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925)
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} DASH Manifest list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/dash_manifests
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to dash_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [{
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.mpd",
 *        "size": 0,
 *        "type": "MPD_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 *
 */

// get dash_manifest

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/dash_manifests/:asset_id Get DASH Manifest
 * @apiName Get DASH Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a dash_manifest for a given video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} DASH Manifest list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/dash_manifests/77874616001
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to dash_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.mpd",
 *        "size": 0,
 *        "type": "MPD_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 *
 */

// post dash_manifests

/**
 * @api {post} /accounts/:account_id/videos/:video_id/assets/dash_manifests Add DASH Manifest
 * @apiName Add DASH Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Adds a location for a remote DASH manifest **Notes**: 1. you can have multiple dash manifests with profiles; you can have only one dash manifest without a profile, but one manifest without a profile can be combined with muliple manifests with profiles; 2. all manifests intended to be used with the CMS API should include a profile - only DASH manifests with profiles will be returned by the CMS API &mdash; only a single DASH manifest without a profile will be returned by the Media API 3. you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [video_duration] the duration of the video in seconds
 *
 * @apiParamExample {json} Add DASH Manifest Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.mpd"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to dash_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.mpd",
 *        "size": 0,
 *        "type": "MPD_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 * @apiErrorExample 422 REQUIRED_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "remote_url: REQUIRED_FIELD"
 *        }
 *    ]
 */

// patch dash_manifests

/**
 * @api {patch} /accounts/:account_id/videos/:video_id/assets/dash_manifests/:asset_id Update DASH Manifest
 * @apiName Update DASH Manifest
 * @apiGroup assetGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the location of a remote dash_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id id for the asset
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiParam (Request Body Fields) {String {1-250}} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiParam (Request Body Fields) {Number} [video_duration] the duration of the video in seconds
 *
 * @apiParamExample {json} Add DASH Manifest Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/hls/chickadee/chickadee.mpd"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to dash_manifests
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete for the asset (will be true for remote assets if a remote_url is supplied)
 * @apiSuccess (Response Fields) {String} controller_type the controller type for ingested renditions (not applicable to remote renditions or other types of assets)
 * @apiSuccess (Response Fields) {String} current_filename the filename for an ingested asset in the Video Cloud system (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} cdn_origin_id an internally used id (not applicable to remote assets)
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download whether ingested rendition is available by progressive download (not applicable to other asset types or remote renditions)
 * @apiSuccess (Response Fields) {String} reference_id video reference id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for a remote asset (not applicable to ingested assets)
 * @apiSuccess (Response Fields) {String} remote_stream_name name for remote streams (not applicable to asset types other than rendition)
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {Number} video_duration video duration in seconds (present if you included it when you created the asset)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "",
 *        "id": "4665727974001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/avideo/ism/chickadee/chickadee.mpd",
 *        "size": 0,
 *        "type": "MPD_MANIFEST",
 *        "updated_at": "2015-12-18T17:02:08.167Z",
 *        "uploaded_at": "2015-12-18T17:02:08.165Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 422: "remote_url: REQUIRED_FIELD" &mdash; this endpoint can only be used to add remote assets
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 * @apiErrorExample 422 REQUIRED_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "remote_url: REQUIRED_FIELD"
 *        }
 *    ]
 */

 // delete dash_manifest

 /**
  * @api {delete} /accounts/:account_id/videos/:video_id/assets/dash_manifests/:asset_id Delete DASH Manifest
  * @apiName Delete DASH Manifest
  * @apiGroup assetGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Deletes an dash_manifest file for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  *
  * @apiParamExample {Url} Delete DASH Manifest list Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/assets/dash_manifests/77874616001
  *
  *
 * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 204 NO CONTENT
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 Error Response
  *     HTTP/1.1 404 Not Found
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  *
  */
