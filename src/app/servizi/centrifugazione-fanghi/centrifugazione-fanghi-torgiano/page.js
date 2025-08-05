import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Torgiano",
  canonical: links.servizi["centrifugazione-fanghi"]["torgiano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Torgiano",
  locationNames: { label: "Torgiano", href: "torgiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
