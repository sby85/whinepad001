'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Suggest = require('./components/Suggest');

var _Suggest2 = _interopRequireDefault(_Suggest);

var _Rating = require('./components/Rating');

var _Rating2 = _interopRequireDefault(_Rating);

var _FormInput = require('./components/FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _Form = require('./components/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Actions = require('./components/Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _Dialog = require('./components/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'div',
  { style: { padding: '20px' } },
  _react2.default.createElement(
    'h1',
    null,
    'Component list'
  ),
  _react2.default.createElement(
    'h2',
    null,
    'Logo'
  ),
  _react2.default.createElement(
    'div',
    { style: { display: 'inline-block', background: 'purple' } },
    _react2.default.createElement(_Logo2.default, null)
  ),
  _react2.default.createElement(
    'h2',
    null,
    'Button'
  ),
  _react2.default.createElement(
    'div',
    null,
    'onClick\u304C\u6307\u5B9A\u3055\u308C\u305FButton: ',
    _react2.default.createElement(
      _Button2.default,
      { onClick: function onClick() {
          return alert('click');
        } },
      'click'
    )
  ),
  _react2.default.createElement(
    'div',
    null,
    'href\u304C\u6307\u5B9A\u3055\u308C\u305FButton: ',
    _react2.default.createElement(
      _Button2.default,
      { href: 'yahoo.co.jp' },
      'follow'
    )
  ),
  _react2.default.createElement(
    'div',
    null,
    'class\u540D\u304C\u6307\u5B9A\u3055\u308C\u305FButton: ',
    _react2.default.createElement(
      _Button2.default,
      { className: 'custom' },
      'None'
    )
  ),
  _react2.default.createElement(
    'h2',
    null,
    'Suggest'
  ),
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Suggest2.default, { options: ['eenie', 'meenie', 'miney', 'mo'] })
  ),
  _react2.default.createElement(
    'h2',
    null,
    'Rating'
  ),
  _react2.default.createElement(
    'div',
    null,
    '\u521D\u671F\u5024\u306A\u3057: ',
    _react2.default.createElement(_Rating2.default, null)
  ),
  _react2.default.createElement(
    'div',
    null,
    '\u521D\u671F\u50244: ',
    _react2.default.createElement(_Rating2.default, { defaultValue: 4 })
  ),
  _react2.default.createElement(
    'div',
    null,
    '\u6700\u5927\u502411: ',
    _react2.default.createElement(_Rating2.default, { max: 11 })
  ),
  _react2.default.createElement(
    'div',
    null,
    '\u8AAD\u307F\u53D6\u308A\u5C02\u7528: ',
    _react2.default.createElement(_Rating2.default, { readonly: true, defaultValue: 3 })
  ),
  _react2.default.createElement(
    'h2',
    null,
    'FormInput'
  ),
  _react2.default.createElement(
    'table',
    null,
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'simple field'
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_FormInput2.default, null)
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'default value'
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_FormInput2.default, { defaultValue: 'Default Value' })
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'input year'
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_FormInput2.default, { type: 'year' })
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'score'
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_FormInput2.default, { type: 'rating', defaultValue: 4 })
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'suggest'
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_FormInput2.default, {
            type: 'suggest',
            options: ['red', 'green', 'blue'],
            defaultValue: 'green' })
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'simple textarea'
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_FormInput2.default, { type: 'text' })
        )
      )
    )
  ),
  _react2.default.createElement(
    'h2',
    null,
    'Form'
  ),
  _react2.default.createElement(_Form2.default, {
    fields: [{ label: 'score', type: 'rating', id: 'rateme' }, { label: 'greeting', id: 'freetext' }],
    initialData: { rateme: 4, freetext: 'Hello!' }
  }),
  _react2.default.createElement(
    'h2',
    null,
    '\u64CD\u4F5C'
  ),
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Actions2.default, { onAction: function onAction(type) {
        return alert(type);
      } })
  ),
  _react2.default.createElement(
    'h2',
    null,
    'Dialog'
  ),
  _react2.default.createElement(
    _Dialog2.default,
    {
      header: 'simple sample',
      onAction: function onAction(type) {
        return alert(type);
      }
    },
    'Hello!'
  ),
  _react2.default.createElement(
    _Dialog2.default,
    {
      header: 'Confirm-Button',
      hasCancel: false,
      confirmLabel: 'Label',
      onAction: function onAction(type) {
        return alert(type);
      }
    },
    'for example ',
    _react2.default.createElement(
      _Button2.default,
      null,
      'Button'
    )
  )
), document.getElementById('pad'));