import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Foggia" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});
