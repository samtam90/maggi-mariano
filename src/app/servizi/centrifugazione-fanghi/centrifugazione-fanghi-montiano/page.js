import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montiano",
  canonical: links.servizi["centrifugazione-fanghi"]["montiano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montiano",
  locationNames: { label: "Montiano", href: "montiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
