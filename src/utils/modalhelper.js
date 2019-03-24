// 解决遮罩层滚动穿透问题，分别在遮罩层弹出后和关闭前调用
/* eslint-disable */
let _scrollTop
class ModalHelper {
    // popup 显示时调用
    static afterOpen() {
        _scrollTop = document.scrollingElement.scrollTop
        document.body.style.position = 'fixed'
        document.body.style.top = -_scrollTop + 'px'
    }

    // popup 关闭时调用
    static beforeClose() {
        document.body.style.position = ''
        document.body.style.top = ''
        // 使 scrollTop 恢复原状
        document.scrollingElement.scrollTop = _scrollTop
    }
}

export default ModalHelper


