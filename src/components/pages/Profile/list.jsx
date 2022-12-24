import React from 'react'

const list = () => {
  return (
    <div>
        <div class="card-group">
            <label class="card-label color-black text-sm">Marital Status</label>
            <div class="normal-input--wrap flex column--100">
                <div class="kuda-dropdown beneficiaries-dropdown column--100">
                    <div class="kuda-dropdown-header">
                        <div class="kuda-dropdown-icon">
                            <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7L13.9282 0.25H0.0717969L7 7Z" fill="black"></path></svg>
                        </div>
                        <div class="kuda-dropdown-title ">Divorced</div>
                    </div>
                </div>
            </div>
        </div>
             
    </div>
  )
}

export default list