import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Piegaro",
  canonical: links.servizi["centrifugazione-fanghi"]["piegaro"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Piegaro",
  locationNames: { label: "Piegaro", href: "piegaro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
