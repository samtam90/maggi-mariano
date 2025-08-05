import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Assisi",
  canonical: links.servizi["centrifugazione-fanghi"]["assisi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Assisi",
  locationNames: { label: "Assisi", href: "assisi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
