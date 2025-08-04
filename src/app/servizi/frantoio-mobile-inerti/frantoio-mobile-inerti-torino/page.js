import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Torino" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});
