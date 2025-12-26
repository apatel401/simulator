import React, {createContext, useState} from 'react'

type Props = {
    id: number,
    children: React.ReactNode
}
type Person = {
    readonly id: number,
  name: string
}
type ConfigType = {
    id: number,
    test: string,
    isComp: boolean,
    slides: Person[],
    updateConfig: (configUpdates: Partial<ConfigType>) => void
}
// eslint-disable-next-line react-refresh/only-export-components
export const configData = createContext({} as ConfigType);

const ProviderComponent: React.FC<Props> = (props) => {

    const configInformation: ConfigType = {
        id: 1,
        test: "",
        isComp: false,
        slides: [],
        updateConfig: (configUpdates: Partial<typeof configInformation>) => {
            setConfigInfo((currentContextInfo) => ({
                ...currentContextInfo,
                ...configUpdates
            }))
        }
    }


    const [configInfo, setConfigInfo] = useState(configInformation)
  return (
   <configData.Provider value={configInfo}>
    {props.children}
   </configData.Provider>
  )
}

export default ProviderComponent