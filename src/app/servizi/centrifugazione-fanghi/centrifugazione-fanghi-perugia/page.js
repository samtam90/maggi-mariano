import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Perugia",
  canonical: links.servizi["centrifugazione-fanghi"]["perugia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Perugia",
  locationNames: { label: "Perugia", href: "perugia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
