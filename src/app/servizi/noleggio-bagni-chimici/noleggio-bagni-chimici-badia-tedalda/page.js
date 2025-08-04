import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Badia Tedalda",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Badia Tedalda", 
  locationNames: {label: "Badia Tedalda", href: "badia-tedalda"} 
});
