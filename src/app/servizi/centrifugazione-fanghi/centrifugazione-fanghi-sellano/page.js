import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Sellano",
  canonical: links.servizi["centrifugazione-fanghi"]["sellano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Sellano",
  locationNames: { label: "Sellano", href: "sellano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
