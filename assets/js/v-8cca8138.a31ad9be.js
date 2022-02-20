"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[89625],{28178:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-8cca8138",path:"/devices/LCZ030.html",title:"TuYa LCZ030 control via MQTT",lang:"en-US",frontmatter:{title:"TuYa LCZ030 control via MQTT",description:"Integrate your TuYa LCZ030 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-01T17:18:02.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Warning",slug:"warning",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Alarm_temperature_max (numeric)",slug:"alarm-temperature-max-numeric",children:[]},{level:3,title:"Alarm_temperature_min (numeric)",slug:"alarm-temperature-min-numeric",children:[]},{level:3,title:"Alarm_humidity_max (numeric)",slug:"alarm-humidity-max-numeric",children:[]},{level:3,title:"Alarm_humidity_min (numeric)",slug:"alarm-humidity-min-numeric",children:[]},{level:3,title:"Alarm_humidity (enum)",slug:"alarm-humidity-enum",children:[]},{level:3,title:"Alarm_temperature (enum)",slug:"alarm-temperature-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/LCZ030.md",git:{updatedTime:1645362962e3}}},52129:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var a=i(66252);const r=(0,a.uE)('<h1 id="tuya-lcz030" tabindex="-1"><a class="header-anchor" href="#tuya-lcz030" aria-hidden="true">#</a> TuYa LCZ030</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>LCZ030</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Temperature &amp; humidity &amp; illuminance sensor with display</td></tr><tr><td>Exposes</td><td>temperature, humidity, battery, illuminance, illuminance_lux, alarm_temperature_max, alarm_temperature_min, alarm_humidity_max, alarm_humidity_min, alarm_humidity, alarm_temperature, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/LCZ030.jpg" alt="TuYa LCZ030"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="warning" tabindex="-1"><a class="header-anchor" href="#warning" aria-hidden="true">#</a> Warning</h3><p>For full functionality of this device you will need to pair it to a TuYa Gateway prior use.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',6),o=(0,a.Uk)("How to use device type specific configuration"),d=(0,a.uE)('<ul><li><p><code>illuminance_precision</code>: Number of digits after decimal point for illuminance, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_precision</code>: Number of digits after decimal point for illuminance_lux, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="alarm-temperature-max-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-max-numeric" aria-hidden="true">#</a> Alarm_temperature_max (numeric)</h3><p>Alarm temperature max. Value can be found in the published state on the <code>alarm_temperature_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_temperature_max&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="alarm-temperature-min-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-min-numeric" aria-hidden="true">#</a> Alarm_temperature_min (numeric)</h3><p>Alarm temperature min. Value can be found in the published state on the <code>alarm_temperature_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_temperature_min&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="alarm-humidity-max-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-max-numeric" aria-hidden="true">#</a> Alarm_humidity_max (numeric)</h3><p>Alarm humidity max. Value can be found in the published state on the <code>alarm_humidity_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_humidity_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alarm-humidity-min-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-min-numeric" aria-hidden="true">#</a> Alarm_humidity_min (numeric)</h3><p>Alarm humidity min. Value can be found in the published state on the <code>alarm_humidity_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_humidity_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alarm-humidity-enum" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-enum" aria-hidden="true">#</a> Alarm_humidity (enum)</h3><p>Alarm humidity status. Value can be found in the published state on the <code>alarm_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>below_min_humdity</code>, <code>over_humidity</code>, <code>off</code>.</p><h3 id="alarm-temperature-enum" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-enum" aria-hidden="true">#</a> Alarm_temperature (enum)</h3><p>Alarm temperature status. Value can be found in the published state on the <code>alarm_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>below_min_temperature</code>, <code>over_temperature</code>, <code>off</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',26),u={},l=(0,i(83744).Z)(u,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[o])),_:1})])]),d],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);