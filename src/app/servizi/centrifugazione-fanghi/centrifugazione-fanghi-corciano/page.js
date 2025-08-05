import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Corciano",
  canonical: links.servizi["centrifugazione-fanghi"]["corciano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Corciano",
  locationNames: { label: "Corciano", href: "corciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
