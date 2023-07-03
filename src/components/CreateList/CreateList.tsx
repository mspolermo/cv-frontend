import React from 'react';

interface CreateListProps<T> {
    //items: T[],
    // renderItem: (item: T) => React.ReactNode,
    items: { "title": string, "info": string } | {
        "title": string, 
        "info": string | ( string | {
            "titleL2": string,
            "infoL2": ( string | { 
                "titleL3": string,
                "infoL3": string[] 
            })[]
        })[]   
    }[]
}

export default function CreateList<T>(props:CreateListProps<T>) {

    return (
        <div>
            { Array.isArray(props.items) && <div>
                {props.items.map(item => <div>
                    <div>{item.title}</div>
                    { (!Array.isArray(item.info)) && <div>{item.info}</div> }
                    { (Array.isArray(item.info)) && <div>
                        {item.info.map( itemL2 => <div>
                            { (typeof itemL2 === 'string') 
                            ? <div>{itemL2}</div>
                            : <div>
                                <div>{itemL2.titleL2}</div>
                                <div>{itemL2.infoL2.map(itemL3 => <div>
                                    { (typeof itemL3 === 'string') 
                                        ? <div>{itemL3}</div>
                                        : <div>
                                            <div>{itemL3.titleL3}</div>
                                            <div>
                                                {itemL3.infoL3.map(itemL4 => <div>
                                                    {itemL4}
                                                </div>)}
                                            </div>
                                        </div>}
                                    </div>)}
                                </div>
                            </div>
                        }
                        </div>)}
                    </div>}
                </div>)}
            </div>}
        </div>
    )
};