import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Viterbo",
  canonical: links.servizi["trasporto-acqua"]["viterbo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["viterbo"],
      name: "Viterbo",
  }),
});
