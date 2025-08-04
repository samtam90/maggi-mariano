import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Verbano-Cusio-Ossola",
  canonical: links.servizi["noleggio-bagni-chimici"]["verbano-cusio-ossola"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Verbano-Cusio-Ossola", 
  locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"} 
});
