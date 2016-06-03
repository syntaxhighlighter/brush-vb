var BrushBase = require('brush-base');
var regexLib = require('syntaxhighlighter-regex').commonRegExp;

function Brush() {
  var keywords = 'AddHandler AddressOf Aggregate Alias And AndAlso Ansi As Assembly Async Auto Await Binary Boolean By ByRef Byte ByVal Call Case Catch CBool CByte CChar CDate CDbl CDec Char CInt Class CLng CObj Compare Const Continue CSByte CShort CSng CStr CType CUInt CULng CUShort Date Decimal Declare Default Delegate Dim DirectCast Distinct Do Double Each Else ElseIf End EndIf Enum Equals Erase Error Event Exit Explicit False Finally For Friend From Function Get GetType GetXMLNamespace Global GoSub GoTo Group Handles If Implements Imports In Inherits Integer Interface Into Is IsFalse IsNot IsTrue Iterator Join Key Let Lib Like Long Loop Me Mid Mod Module MustInherit MustOverride MyBase MyClass NameOf Namespace Narrowing New Next Not Nothing NotInheritable NotOverridable Object Of Off On Operator Option Optional Or Order OrElse Out Overloads Overridable Overrides ParamArray Partial Preserve Private Property Protected Public RaiseEvent ReadOnly ReDim Region REM RemoveHandler Resume Return SByte Select Set Shadows Shared Short Single Skip Static Step Stop Strict String Structure Sub SyncLock Take Text Then Throw To True Try TryCast TypeOf UInteger ULong Unicode Until UShort Using Variant Wend When Where While Widening With WithEvents WriteOnly Xor Yield';

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
