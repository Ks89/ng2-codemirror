import {
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  forwardRef,
  AfterViewInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * CodeMirror component
 * Usage :
 * <codemirror [(ngModel)]="data" [config]="{...}"></codemirror>
 */
@Component({
  selector: 'codemirror',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodemirrorComponent),
      multi: true
    }
  ],
  template: `<textarea #host></textarea>`
})
export class CodemirrorComponent implements AfterViewInit {

  @Input() config: any;

  // tslint:disable-next-line:no-output-native
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-native
  @Output() focus: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-native
  @Output() blur: EventEmitter<any> = new EventEmitter<any>();

  @Output() cursorActivity: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('host') host: ElementRef | undefined;

  private instance: any;
  private val = '';
  private codemirror: any;

  /**
   * Constructor
   */
  constructor() {
    if (typeof window !== 'undefined') {
      this.codemirror = require('codemirror');
    }
  }

  get value(): string {
    return this.val;
  }

  @Input() set value(v) {
    if (v !== this.val) {
      this.val = v;
      this.onChange(v);
    }
  }

  /**
   * On component view init
   */
  ngAfterViewInit(): void {
    this.config = this.config || {};
    this.codemirrorInit(this.config);
  }

  /**
   * Initialize codemirror
   */
  codemirrorInit(config: any): void {
    if (!this.host) {
      throw new Error('Internal library error - host must be defined');
    }
    this.instance = this.codemirror.fromTextArea(this.host.nativeElement, config);
    this.instance.setValue(this.val);

    this.instance.on('change', () => {
      this.updateValue(this.instance.getValue());
    });

    this.instance.on('focus', (instance: any, event: any) => {
      this.focus.emit({instance, event});
    });

    this.instance.on('cursorActivity', (instance: any) => {
      this.cursorActivity.emit({instance});
    });

    this.instance.on('blur', (instance: any, event: any) => {
      this.blur.emit({instance, event});
    });
  }

  /**
   * Value update process
   */
  updateValue(value: any): void {
    this.value = value;
    this.onTouched();
    this.change.emit(value);
  }

  /**
   * Implements ControlValueAccessor
   */
  writeValue(value: any): void {
    this.val = value || '';
    if (this.instance) {
      this.instance.setValue(this.val);
    }
  }

  onChange(_: any): void {}

  onTouched(): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
