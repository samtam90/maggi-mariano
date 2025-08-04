import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Verona",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Verona", 
    locationNames: {label: "Verona", href: "verona"}  
});
