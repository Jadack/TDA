defmodule RomanNumbers do
  @romansValues %{
    1 => "I",
    4 => "IV",
    5 => "V",
    9 => "IX",
    10 => "X",
    40 => "XL",
    50 => "L",
    90 => "XC",
    100 => "C",
    400 => "CD",
    500 => "D",
    900 => "CM",
    1000 => "M"
  }

  @romansKeys Map.keys(@romansValues) |> Enum.sort(&(&1 > &2))
  @spec number(pos_integer) :: String.t
  def number(num) do
    convertRoman(@romansKeys, num, "")
  end
  defp convertRoman(_, 0, result), do: result
  defp convertRoman([max | rest] = keys, num, result) do
    if num >= max do
      convertRoman(keys, num - max, result <> @romansValues[max])
    else 
      convertRoman(rest, num, result)
    end
  end
end