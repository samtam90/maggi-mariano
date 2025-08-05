import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Colle di Val d'Elsa",
  canonical: links.servizi["centrifugazione-fanghi"]["colle-di-val-d-elsa"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Colle di Val d'Elsa",
  locationNames: { label: "Colle di Val d'Elsa", href: "colle-di-val-d-elsa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
