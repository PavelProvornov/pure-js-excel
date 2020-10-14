import './scss/index.scss'
import {
    Excel
} from './components/Excel'

import {
    ExcelHeader
} from "./components/HeaderComponent"
import {
    ExcelToolbar
} from "./components/ToolbarComponent"
import {
    ExcelFormula
} from "./components/FormulaComponent"
import {
    ExcelTable
} from "./components/ExcelTableComponent"



const excel = new Excel('#app', {
    components: [ExcelHeader, ExcelToolbar, ExcelFormula, ExcelTable]
}).render()