var BrushBase = require('brush-base');
var regexLib = require('syntaxhighlighter-regex').commonRegExp;

function Brush() {
  var keywords = 'GetXMLNamespace NotInheritable NotOverridable RemoveHandler MustOverride MustInherit Overridable AddHandler DirectCast Implements ParamArray RaiseEvent WithEvents AddressOf Interface Namespace Narrowing Overloads Overrides Protected Structure WriteOnly Aggregate Continue Delegate Function Inherits Operator Optional Property ReadOnly SyncLock UInteger Widening Assembly Distinct Explicit Iterator Preserve AndAlso Boolean CUShort Decimal Declare Default Finally GetType Handles Imports Integer MyClass Nothing Partial Private Shadows TryCast Variant Compare IsFalse Unicode CSByte CShort Double ElseIf Friend Global Module MyBase Object Option OrElse Public Resume Return Select Shared Single Static String TypeOf UShort Binary Equals NameOf IsTrue Strict Region Alias ByRef ByVal Catch CBool CByte CChar CDate Class Const CType CUInt CULng EndIf Erase Error Event False GoSub IsNot ReDim SByte Short Throw ULong Using While Async Await Group Order Until Where Yield Byte Call Case CDbl CDec Char CInt CLng CObj CSng CStr Date Each Else Enum Exit GoTo Like Long Loop Next Step Stop True Then Wend When With Ansi Auto From Join Into Skip Take Text And Dim End For Get Let Lib Mod New Not Out REM Set Sub Try Xor Key Mid Off As Do If In Is Me Of On To Or By';

  this.regexList = [
    {
      regex: /'.*$/gm,
      css: 'comments'
    },
    {
      regex: regexLib.doubleQuotedString,
      css: 'string'
    },
    {
      regex: /^\s*#.*$/gm,
      css: 'preprocessor'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gm'),
      css: 'keyword'
    }
	];

  this.forHtmlScript(regexLib.aspScriptTags);
};

Brush.prototype = new BrushBase();
Brush.aliases = ['vb', 'vbnet'];
module.exports = Brush;
