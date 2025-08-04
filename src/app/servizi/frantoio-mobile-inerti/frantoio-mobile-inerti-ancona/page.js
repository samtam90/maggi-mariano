import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Ancona" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Ancona", 
    locationNames: {label: "Ancona", href: "ancona"}  
});
