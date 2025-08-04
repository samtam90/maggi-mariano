import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Parma" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Parma", 
    locationNames: {label: "Parma", href: "parma"}  
});
