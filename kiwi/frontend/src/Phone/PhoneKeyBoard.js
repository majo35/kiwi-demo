import React from 'react'
import './PhoneKeyBoard.css'


const phoneKeyBoard = ({changed, children}) => {
    return (
        <div className="PhoneKeyBoard">
            <table id="keyBoard" className="center">
            <tr>
		        <td>
			        <button disabled >1
                        <span>. , !</span>
                    </button>
		        </td>
		        <td>
			        <button onClick={()=> {changed(2)}}>2
                        <span>a b c</span>
                    </button>
		        </td>
		        <td>
			        <button onClick={()=> {changed(3)}}>3
                        <span>d e f</span>
                    </button>
		        </td>
	        </tr>

	        <tr>
		        <td>
			        <button onClick={()=> {changed(4)}}>4
                        <span>g h i</span>
                    </button>
		        </td>
		        <td>
			        <button onClick={()=> {changed(5)}}>5
                        <span>j k l</span>
                    </button>
		        </td>
		        <td>
			        <button onClick={()=> {changed(6)}}>6
                        <span>m n o</span>
                    </button>
		        </td>
	        </tr>

	        <tr>
		        <td>
			        <button onClick={()=> {changed(7)}}>7
                        <span>p q r s</span>
                    </button>
		        </td>
		        <td>
			        <button onClick={()=> {changed(8)}}>8
                        <span>t u v</span>
                    </button>
		        </td>
		        <td>
			        <button onClick={()=> {changed(9)}}>9
                        <span>w x y z</span>
                    </button>
		        </td>
	        </tr>
	    
            <tr>
		        <td>
			        <button  disabled >*</button>
		        </td>
		        <td>
			        <button disabled>0</button>
		        </td>
		        <td>
			        <button disabled>#</button>
		        </td>
	        </tr>
            </table>
        </div>
    )
}

export default phoneKeyBoard