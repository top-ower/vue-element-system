import { validateNull } from '@/utils/validate'

/*四舍五入*/
export function takeInteger(val) {
  if (validateNull(val)) { 
  	return;
  }
  return Math.round(val);
}

/*格式化时间*/
export function formattedSecond(value) {
  if (validateNull(value)) {
  	return '0小时0分钟0秒';
  }
  return `${Math.floor(value / 60)}小时${Math.floor(value % 60)}分钟${(value - ((Math.floor(value / 60) * 60) + (Math.floor(value % 60)))) * 60}秒`;
}