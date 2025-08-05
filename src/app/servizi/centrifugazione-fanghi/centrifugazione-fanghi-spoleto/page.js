import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Spoleto",
  canonical: links.servizi["centrifugazione-fanghi"]["spoleto"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Spoleto",
  locationNames: { label: "Spoleto", href: "spoleto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
