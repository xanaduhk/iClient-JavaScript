/**
 *SuperMapOpenlayers基础模块
 * 1、定义命名空间
 * 2、提供必要的转换工具
 */
var ol = require('openlayers/dist/ol-debug');
ol.supermap = ol.supermap || {};
ol.supermap.Util = ol.supermap.Util || {};
ol.supermap.control = ol.supermap.control || {};
require('./Util');
require('../../common/SuperMap');
require('../../common/REST');
