import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Tuoro sul Trasimeno",
  canonical: links.servizi["centrifugazione-fanghi"]["tuoro-sul-trasimeno"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Tuoro sul Trasimeno",
  locationNames: { label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
