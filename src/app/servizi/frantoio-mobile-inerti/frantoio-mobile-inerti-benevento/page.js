import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Benevento" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Benevento", 
    locationNames: {label: "Benevento", href: "benevento"}  
});
