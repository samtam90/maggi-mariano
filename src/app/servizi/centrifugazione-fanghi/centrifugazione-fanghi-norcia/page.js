import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Norcia",
  canonical: links.servizi["centrifugazione-fanghi"]["norcia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Norcia",
  locationNames: { label: "Norcia", href: "norcia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
