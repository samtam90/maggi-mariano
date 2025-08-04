import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Terni" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});
