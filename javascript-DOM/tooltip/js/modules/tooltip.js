export default function initToolTip() {
  const toolTips = document.querySelectorAll('[data-tooltip]');

  toolTips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onMouseOver);
  });

  function onMouseOver(e) {
    const toolTipBox = criarToolTipBox(this)
    
    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener('mousemove', onMouseMove);
  }

  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave)
    }
  }

  const onMouseMove = {
    handleEvent(e) {
      this.toolTipBox.style.top = e.pageY + 20 + 'px';
      this.toolTipBox.style.left = e.pageX + 20  + 'px';
      this.element.removeEventListener('mousemove', onMouseMove)
    }
  }

  function criarToolTipBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');

    toolTipBox.classList.add('tooltip');
    toolTipBox.innerText = text;
    
    document.body.appendChild(toolTipBox);

    return toolTipBox;
  }
}