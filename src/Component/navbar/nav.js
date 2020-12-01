import React from 'react';
const Nav =(props)=>{
    return(
        <nav style={{display:'flex' ,justifyContent:'flex-end' ,position:'relative',zIndex:'99'}}>
        <p className='f3 link dim blak underline pa3 pointer' onClick={props.signout}> Sign out</p>
        </nav>
    );
}
export default Nav;
