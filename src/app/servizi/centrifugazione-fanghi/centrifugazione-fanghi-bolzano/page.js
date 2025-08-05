import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Bolzano",
  canonical: links.servizi["centrifugazione-fanghi"]["bolzano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Bolzano",
  locationNames: { label: "Bolzano", href: "bolzano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["bolzano"],
      name: "Bolzano",
  }),
});
