import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Casole d'Elsa",
  canonical: links.servizi["centrifugazione-fanghi"]["casole-d-elsa"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Casole d'Elsa",
  locationNames: { label: "Casole d'Elsa", href: "casole-d-elsa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
