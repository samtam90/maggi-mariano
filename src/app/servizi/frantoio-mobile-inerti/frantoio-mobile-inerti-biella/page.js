import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Biella" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Biella", 
    locationNames: {label: "Biella", href: "biella"}  
});
