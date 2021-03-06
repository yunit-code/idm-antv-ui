import ToolTip from './Tooltip';
import Base from '../base';

/* istanbul ignore next */
ToolTip.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+ToolTip.name, ToolTip);
};

export default ToolTip;
