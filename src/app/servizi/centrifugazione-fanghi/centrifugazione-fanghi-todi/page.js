import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Todi",
  canonical: links.servizi["centrifugazione-fanghi"]["todi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Todi",
  locationNames: { label: "Todi", href: "todi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
