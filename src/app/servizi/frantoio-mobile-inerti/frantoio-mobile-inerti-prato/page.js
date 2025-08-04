import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Prato" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Prato", 
    locationNames: {label: "Prato", href: "prato"}  
});
