import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Empoli",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Empoli", 
    locationNames: {label: "Empoli", href: "empoli"}  
});
