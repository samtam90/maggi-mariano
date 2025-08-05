import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi San Giustino",
  canonical: links.servizi["centrifugazione-fanghi"]["san-giustino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi San Giustino",
  locationNames: { label: "San Giustino", href: "san-giustino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
