export function sampleDrawingModal() {
  return `
    <div class="sample-drawing-modal" data-sample-modal hidden>
      <div class="sample-drawing-modal__backdrop" data-sample-modal-close></div>
      <section class="sample-drawing-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="sampleDrawingModalTitle">
        <div class="sample-drawing-modal__topline">
          <p>Sample Drawing</p>
          <button type="button" aria-label="Close sample drawing preview" data-sample-modal-close>×</button>
        </div>
        <div class="sample-drawing-modal__preview">
          <img src="" alt="" data-sample-modal-image>
        </div>
        <h2 id="sampleDrawingModalTitle" data-sample-modal-title></h2>
        <dl class="sample-drawing-modal__meta">
          <div>
            <dt>Tier Level</dt>
            <dd data-sample-modal-tier></dd>
          </div>
          <div>
            <dt>Project Name</dt>
            <dd data-sample-modal-project></dd>
          </div>
          <div>
            <dt>Purpose</dt>
            <dd data-sample-modal-purpose></dd>
          </div>
          <div>
            <dt>Highlight</dt>
            <dd data-sample-modal-highlight></dd>
          </div>
        </dl>
        <a class="sample-drawing-modal__link" href="#" target="_blank" rel="noopener" data-sample-modal-pdf>
          <span>Open Sample Drawing</span>
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </div>
  `;
}
