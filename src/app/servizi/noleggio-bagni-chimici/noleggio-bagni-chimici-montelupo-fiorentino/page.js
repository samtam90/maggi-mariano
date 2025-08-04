import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montelupo Fiorentino",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Montelupo Fiorentino", 
  locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"} 
});
