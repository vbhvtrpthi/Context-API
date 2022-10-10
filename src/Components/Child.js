import React from 'react'

function Child({theme}) {
    console.log('child called');
//In REACT whenever parent renders, it's corresponding child also rerenders, but if we want that child doesn't rerender then while exporting use "React.memo(Child)"
    return (
        <div>
            Child component
        </div>
    )
}

export default Child
// export default React.memo(Child)
