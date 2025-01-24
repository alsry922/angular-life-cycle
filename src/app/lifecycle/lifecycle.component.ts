import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;
  @Input() test?: string;

  // 복잡한 초기화 작업을 constructor에서 하지 말 것
  // constructor에서는 컴포넌트 정보(입력 데이터 등)를 사용할 수 없음
  constructor() {
    console.log('CONSTRUCTOR');
  }

  // 컴포넌트가 초기화되고 입력값이 초기화 됏을 때 실행된다.
  // 주요 컴포넌트 초기화 작업을 ngOnInit에서 수행할 것
  ngOnInit() {
    console.log('ngOnInit');
  }

  // input이 변경될 때마다 실행됨
  // changes는 변경된 입력 데이터들을 담고있음(변경된 것만)
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // 모든 변경 감지 사이클마다(이벤트나, 입력 데이터 변경 감지마다) 실행됨
  // ngOnChanges보다 더 자주 실행되기 때문에 성능 문제를 일으킬 수 있는 코드는 여기서 실행하면 안 됨
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // ng-content로 프로젝션될 수 있는 모든 콘텐츠
  // 컴포넌트 뷰에 프로젝션되는 모든 콘텐츠를 의미한다.(부모 컴포넌트에서 <ng-content>로 투영(projection)된 내용.)
  // 프로젝션된 콘텐츠가 초기화 되면(삽입된 컨텐츠가 뷰에 반영되고 나서) 실행된다.
  // 따라서 해당 콘텐츠에 접근할 수 있고, 컨텐츠의 정보를 얻을 수 있다.
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // ng-content로 삽입된 컨텐츠가 변경될 때마다 실행된다.
  // (ng-content로 보여주는 DOM 구조가 달라지거나, 부모 컴포넌트가 ng-content로 보여줄 템플릿에 전달하는 데이터가 바뀌는 경우)
  // 아마 자주 사용하지는 않을 것이다.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // view는 컴포넌트 템플릿 파일의 모든 요소들이 view다.
  // 컴포넌트 자신의 HTML 템플릿과 거기에 속한 모든 내용.(쉽게 템플릿이라고 생각하면 됨)
  // 더 정확히는 컴포넌트에 의해 렌더링 되는 모든 DOM 요소들의 참조를 구조화한 구조체(내부적으로 관리되는)를 의미한다.
  // 컴포넌트와 자식 컴포넌트의 View가 모두 초기화가 끝난 후 실행
  // View 초기화 이후 DOM 조작이나, 자식 컴포넌트 상태 확인 등에 용이하다.
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // 컴포넌트 View와 자식 컴포넌트의 View가 변경감지를 완료한 후 호출된다.
  // 자주 실행되므로 성능에 주의해야 한다.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // 컴포넌트 인스턴스가 언마운트 되기 직전에 실행됨(렌더링에서 제외되기 직전)
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
